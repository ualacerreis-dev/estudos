import { useCallback, useEffect, useState, type FormEvent } from 'react';
import type { Session } from '@supabase/supabase-js';
import { BookOpen, LoaderCircle, ShieldCheck } from 'lucide-react';
import { supabase } from './lib/supabase';

const KEYS = ['trilha-pcmg-progress-v1', 'trilha-pcmg-metrics-v1', 'trilha-pcmg-quiz-v1', 'trilha-pcmg-reviews-v1', 'trilha-pcmg-makeups-v1'];
const CLOUD_USER_KEY = 'trilha-pcmg-cloud-user';
let activeCloudUser: string | null = null;
let syncTimer: number | undefined;
let syncInstalled = false;
let hydrating = false;

function installCloudSync() {
  if (syncInstalled || typeof window === 'undefined') return;
  syncInstalled = true;
  const originalSetItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function (key: string, value: string) {
    originalSetItem.call(this, key, value);
    if (this !== window.localStorage || !KEYS.includes(key) || !activeCloudUser || hydrating) return;
    if (syncTimer !== undefined) window.clearTimeout(syncTimer);
    const userId = activeCloudUser;
    syncTimer = window.setTimeout(async () => {
      if (activeCloudUser !== userId) return;
      const state: Record<string, string> = {};
      KEYS.forEach((storageKey) => {
        const stored = window.localStorage.getItem(storageKey);
        if (stored !== null) state[storageKey] = stored;
      });
      const { error } = await supabase.from('study_state').upsert({
        user_id: userId,
        state,
        updated_at: new Date().toISOString(),
      });
      if (error) console.error('Falha ao sincronizar progresso:', error.message);
    }, 700);
  };
}

export default function AuthGate() {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [ready, setReady] = useState(false);

  const activate = useCallback(async (nextSession: Session | null) => {
    activeCloudUser = null;
    setSession(nextSession);
    setReady(false);
    if (!nextSession) {
      window.localStorage.removeItem(CLOUD_USER_KEY);
      setReady(true);
      return;
    }

    hydrating = true;
    try {
      const { data, error } = await supabase.from('study_state').select('state').eq('user_id', nextSession.user.id).maybeSingle();
      if (error) throw error;
      const cloudState = data?.state as Record<string, unknown> | undefined;
      const hasCloudProgress = !!cloudState && Object.keys(cloudState).some((key) => KEYS.includes(key));

      if (hasCloudProgress) {
        KEYS.forEach((key) => {
          const value = cloudState?.[key];
          if (typeof value === 'string') window.localStorage.setItem(key, value);
        });
      } else {
        // On first login, keep this browser's progress and upload it to the new account.
        const initial: Record<string, string> = {};
        KEYS.forEach((key) => {
          const value = window.localStorage.getItem(key);
          if (value !== null) initial[key] = value;
        });
        const { error: saveError } = await supabase.from('study_state').upsert({
          user_id: nextSession.user.id,
          state: initial,
          updated_at: new Date().toISOString(),
        });
        if (saveError) throw saveError;
      }

      installCloudSync();
      window.localStorage.setItem(CLOUD_USER_KEY, nextSession.user.id);
      activeCloudUser = nextSession.user.id;
      setMessage('');
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Não foi possível carregar seus dados.');
    } finally {
      hydrating = false;
      setReady(true);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data, error }) => {
      if (!mounted) return;
      if (error) setMessage(error.message);
      void activate(data.session);
      setChecking(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (mounted) void activate(nextSession);
    });
    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, [activate]);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage('');
    try {
      const result = mode === 'signup'
        ? await supabase.auth.signUp({ email: email.trim(), password, options: { emailRedirectTo: 'https://estudos-wallace-mdb-2154.vercel.app' } })
        : await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (result.error) throw result.error;
      if (mode === 'signup' && !result.data.session) {
        setMessage('Cadastro iniciado. Confira seu e-mail para confirmar a conta e depois entre por aqui.');
      } else if (mode === 'login' && result.data.session) {
        setMessage('Login realizado. Carregando seu progresso...');
      }
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Não foi possível autenticar.');
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    activeCloudUser = null;
    if (syncTimer !== undefined) window.clearTimeout(syncTimer);
    await supabase.auth.signOut();
    window.localStorage.removeItem(CLOUD_USER_KEY);
    setSession(null);
    setReady(false);
  }

  if (checking || (session && !ready)) return <div className="auth-screen"><div className="auth-card"><LoaderCircle className="auth-spinner" size={30}/><h1>Preparando sua trilha...</h1><p>Carregando sua conta e sincronizando o progresso.</p></div></div>;

  if (session && ready) return <><div className="cloud-account"><span><ShieldCheck size={15}/> {message ? 'Conta conectada · atenção necessária' : 'Progresso sincronizado'} · {session.user.email}</span><button onClick={signOut}>Sair</button></div>{message && <p className="auth-message" role="status">{message}</p>}<div className="auth-app"><AppMount /></div></>;

  return <div className="auth-screen"><div className="auth-card"><div className="auth-logo"><BookOpen size={25}/></div><p className="eyebrow">PREPARAÇÃO PCMG</p><h1>{mode === 'login' ? 'Entre na sua Trilha' : 'Crie sua conta'}</h1><p className="auth-description">Salve aulas concluídas, questões e desempenho para continuar em outros dispositivos.</p><form onSubmit={submit}><label>E-mail<input type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="voce@exemplo.com"/></label><label>Senha<input type="password" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} minLength={6} required value={password} onChange={e => setPassword(e.target.value)} placeholder="Mínimo de 6 caracteres"/></label><button className="auth-submit" type="submit" disabled={busy}>{busy ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}</button></form>{message&&<p className="auth-message" role="status">{message}</p>}<button className="auth-switch" onClick={() => {setMode(mode === 'login' ? 'signup' : 'login');setMessage('');}}>{mode === 'login' ? 'Ainda não tem conta? Criar cadastro' : 'Já tem conta? Entrar'}</button><small>Seus dados ficam protegidos por regras de acesso por usuário. Nunca compartilhe sua senha.</small></div></div>;
}

// Keep application state from initializing until the cloud copy has been loaded.
import App from './App';
function AppMount() { return <App />; }
