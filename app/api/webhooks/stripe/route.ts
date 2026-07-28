import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";
import { render } from "@react-email/render";
import ConfirmRegistrationEmail from "@/emails/letters/confirm-registration";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const clerkUserId = session.metadata?.clerkUserId;
    const email = session.customer_email;

    if (!clerkUserId || !email) {
      return NextResponse.json({ error: "Missing metadata" }, { status: 400 });
    }

    // Mark user as paid in Supabase
    await supabase.from("users").upsert({
      clerk_user_id: clerkUserId,
      email,
      paid: true,
      paid_at: new Date().toISOString(),
    });

    // Send confirmation email
    const firstName = email.split("@")[0];
    const confirmUrl = `${process.env.NEXT_PUBLIC_APP_URL}/letters`;
    const html = await render(
      ConfirmRegistrationEmail({ firstName, confirmUrl })
    );
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: "You're in! Gateway to Web 3.0 starts now",
      html,
    });
  }

  return NextResponse.json({ received: true });
}

export const config = { api: { bodyParser: false } };
