import { useCallback, useEffect, useState, type FormEvent } from 'react';
import type { Session } from '@supabase/supabase-js';
import { BookOpen, LoaderCircle, ShieldCheck } from 'lucide-react';
import { supabase } from './lib/supabase';

const KEYS = ['trilha-pcmg-progress-v1', 'trilha-pcmg-metrics-v1', 'trilha-pcmg-quiz-v1', 'trilha-pcmg-reviews-v1'];

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
    setSession(nextSession);
    setReady(false);
    if (!nextSession) return;
    try {
      const { data, error } = await supabase.from('study_state').select('state').eq('user_id', nextSession.user.id).maybeSingle();
      if (error) throw error;
      const cloudState = data?.state as Record<string, string> | undefined;
      const originalSetItem = Storage.prototype.setItem;
      if (cloudState && Object.keys(cloudState).length) {
        KEYS.forEach((key) => {
          const value = cloudState[key];
          if (typeof value === 'string') originalSetItem.call(localStorage, key, value);
        });
      } else {
        // First sign-in: carry this browser's current progress into the cloud.
        const initial: Record<string, string> = {};
        KEYS.forEach((key) => {
          const value = localStorage.getItem(key);
          if (value !== null) initial[key] = value;
        });
        const { error: saveError } = await supabase.from('study_state').upsert({ user_id: nextSession.user.id, state: initial, updated_at: new Date().toISOString() });
        if (saveError) throw saveError;
      }

      let timer: number | undefined;
      Storage.prototype.setItem = function (key: string, value: string) {
        originalSetItem.call(this, key, value);
        if (!KEYS.includes(key) || !localStorage.getItem('trilha-pcmg-cloud-user')) return;
        if (timer) window.clearTimeout(timer);
        timer = window.setTimeout(async () => {
          const state: Record<string, string> = {};
          KEYS.forEach((storageKey) => {
            const stored = localStorage.getItem(storageKey);
            if (stored !== null) state[storageKey] = stored;
          });
          const userId = localStorage.getItem('trilha-pcmg-cloud-user');
          if (!userId) return;
          const { error: saveError } = await supabase.from('study_state').upsert({ user_id: userId, state, updated_at: new Date().toISOString() });
          if (saveError) console.error('Falha ao sincronizar progresso:', saveError.message);
        }, 600);
      };
      originalSetItem.call(localStorage, 'trilha-pcmg-cloud-user', nextSession.user.id);
      setReady(true);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Não foi possível carregar seus dados.');
      setReady(true);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) {
        void activate(data.session);
        setChecking(false);
      }
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
        ? await supabase.auth.signUp({ email: email.trim(), password })
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
    await supabase.auth.signOut();
    localStorage.removeItem('trilha-pcmg-cloud-user');
    setSession(null);
    setReady(false);
  }

  if (checking || (session && !ready)) return <div className="auth-screen"><div className="auth-card"><LoaderCircle className="auth-spinner" size={30}/><h1>Preparando sua trilha...</h1><p>Carregando sua conta e sincronizando o progresso.</p></div></div>;

  if (session && ready) return <><div className="cloud-account"><span><ShieldCheck size={15}/> Progresso sincronizado · {session.user.email}</span><button onClick={signOut}>Sair</button></div><div className="auth-app"><AppMount /></div></>;

  return <div className="auth-screen"><div className="auth-card"><div className="auth-logo"><BookOpen size={25}/></div><p className="eyebrow">PREPARAÇÃO PCMG</p><h1>{mode === 'login' ? 'Entre na sua Trilha' : 'Crie sua conta'}</h1><p className="auth-description">Salve aulas concluídas, questões e desempenho para continuar em outros dispositivos.</p><form onSubmit={submit}><label>E-mail<input type="email" autoComplete="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="voce@exemplo.com"/></label><label>Senha<input type="password" autoComplete={mode === 'login' ? 'current-password' : 'new-password'} minLength={6} required value={password} onChange={e => setPassword(e.target.value)} placeholder="Mínimo de 6 caracteres"/></label><button className="auth-submit" type="submit" disabled={busy}>{busy ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}</button></form>{message&&<p className="auth-message" role="status">{message}</p>}<button className="auth-switch" onClick={() => {setMode(mode === 'login' ? 'signup' : 'login');setMessage('');}}>{mode === 'login' ? 'Ainda não tem conta? Criar cadastro' : 'Já tem conta? Entrar'}</button><small>Seus dados ficam protegidos por regras de acesso por usuário. Nunca compartilhe sua senha.</small></div></div>;
}

// Imported lazily at the auth boundary so cloud data is loaded before app state initializes.
import App from './App';
function AppMount() { return <App />; }
