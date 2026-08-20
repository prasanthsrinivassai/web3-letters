import { render } from "@react-email/render";
import Day8Email from "@/emails/letters/day-8";

export default async function Day8Page() {
  const html = await render(Day8Email());

  return (
    <iframe
      srcDoc={html}
      title="Day 8 — Beyond Bitcoin"
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
