import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST() {
  const { userId, sessionClaims } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const email = sessionClaims?.email as string | undefined;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    customer_email: email,
    metadata: { clerkUserId: userId },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/letters?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
  });

  return NextResponse.redirect(session.url!, 303);
}
