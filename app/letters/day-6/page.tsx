import { render } from "@react-email/render";
import Day6Email from "@/emails/letters/day-6";

export default async function Day6Page() {
  const html = await render(Day6Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 6 — Newsletter"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
