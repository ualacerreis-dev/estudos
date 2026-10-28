import { createClient } from '@supabase/supabase-js';

// A publishable key is intended for browser use. Database access is protected by RLS.
export const supabase = createClient(
  'https://dekruuxwctqqjiswmblk.supabase.co',
  'sb_publishable_QXCpg1QG7pATThtlyI15zw_ZfU7t4Bh',
  { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } },
);
