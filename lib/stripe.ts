import Stripe from "stripe";

let _stripe: Stripe | undefined;

function getStripeClient(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-06-24.dahlia",
    });
  }
  return _stripe;
}

// Lazy proxy: the real Stripe client is only constructed on first use,
// so a missing STRIPE_SECRET_KEY at build time doesn't crash the build
// (Next.js evaluates this module while collecting page data for every
// route, including ones that never actually call Stripe at runtime).
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop, receiver) {
    return Reflect.get(getStripeClient(), prop, receiver);
  },
});
