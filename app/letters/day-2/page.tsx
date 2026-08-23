import { render } from "@react-email/render";
import Day2Email from "@/emails/letters/day-2";

export default async function Day2Page() {
  const html = await render(Day2Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 2 — Bitcoin | Blockchain Web 3.0"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
