import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | undefined;

function getSupabaseClient(): SupabaseClient {
  if (!_supabase) {
    _supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );
  }
  return _supabase;
}

// Lazy proxy: see lib/stripe.ts for why this isn't constructed eagerly.
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    return Reflect.get(getSupabaseClient(), prop, receiver);
  },
});

export async function isUserPaid(clerkUserId: string): Promise<boolean> {
  const { data } = await supabase
    .from("users")
    .select("paid")
    .eq("clerk_user_id", clerkUserId)
    .single();
  return data?.paid === true;
}
