import { render } from "@react-email/render";
import Day3Email from "@/emails/letters/day-3";

export default async function Day3Page() {
  const html = await render(Day3Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 3 — Gateway to Web 3.0"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
