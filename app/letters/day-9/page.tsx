import { render } from "@react-email/render";
import Day9Email from "@/emails/letters/day-9";

export default async function Day9Page() {
  const html = await render(Day9Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 9"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
