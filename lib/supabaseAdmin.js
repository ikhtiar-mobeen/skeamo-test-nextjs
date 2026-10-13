// Used by the admin screens to bypass row-level security.
export const supabaseAdmin = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  key: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY,
};
