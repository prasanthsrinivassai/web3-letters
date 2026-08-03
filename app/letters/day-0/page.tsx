import { render } from "@react-email/render";
import Day0Email from "@/emails/letters/day-0";

export default async function Day0Page() {
  const html = await render(Day0Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 0 — Gateway to Web 3.0"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
