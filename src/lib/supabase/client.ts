/**
 * Supabase Client Initialization for Webworks Creator SaaS
 * Supports client-side authentication and Row-Level Security (RLS)
 */

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

export function getSupabaseConfig(): SupabaseConfig {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key",
  };
}
