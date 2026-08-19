import { render } from "@react-email/render";
import Day7Email from "@/emails/letters/day-7";

export default async function Day7Page() {
  const html = await render(Day7Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 7 — Compounding Value"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
