import { render } from "@react-email/render";
import ConfirmRegistrationEmail from "@/emails/letters/confirm-registration";

export async function GET() {
  const html = await render(
    ConfirmRegistrationEmail({
      firstName: "Gayatri",
      confirmUrl: "https://example.com/confirm?token=preview",
    })
  );

  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
