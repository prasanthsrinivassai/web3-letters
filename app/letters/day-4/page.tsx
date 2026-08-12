import { render } from "@react-email/render";
import Day4Email from "@/emails/letters/day-4";

export default async function Day4Page() {
  const html = await render(Day4Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 4 — Cryptocurrency Wallets: Creation of a Cold Wallet"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
