import { Resend } from "resend";

let _resend: Resend | undefined;

function getResendClient(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}

// Lazy proxy: see lib/stripe.ts for why this isn't constructed eagerly.
export const resend = new Proxy({} as Resend, {
  get(_target, prop, receiver) {
    return Reflect.get(getResendClient(), prop, receiver);
  },
});
