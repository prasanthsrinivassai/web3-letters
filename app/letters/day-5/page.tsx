import { render } from "@react-email/render";
import Day5Email from "@/emails/letters/day-5";

export default async function Day5Page() {
  const html = await render(Day5Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 5 — Eth 2.0, Layer 2's and its uses"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
