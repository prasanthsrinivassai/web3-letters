import { render } from "@react-email/render";
import Day1Email from "@/emails/letters/day-1";

export default async function Day1Page() {
  const html = await render(Day1Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 1 — History of Money & Bitcoin Inception"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
