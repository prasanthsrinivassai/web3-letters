import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function isUserPaid(clerkUserId: string): Promise<boolean> {
  const { data } = await supabase
    .from("users")
    .select("paid")
    .eq("clerk_user_id", clerkUserId)
    .single();
  return data?.paid === true;
}
