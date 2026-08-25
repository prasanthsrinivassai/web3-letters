import { notFound } from "next/navigation";
import { render } from "@react-email/render";
import { ResponsiveEmailFrame } from "@/components/ResponsiveEmailFrame";

const emailMap: Record<string, () => Promise<{ default: () => React.ReactElement }>> = {
  "day-0": () => import("@/emails/letters/day-0"),
  "day-1": () => import("@/emails/letters/day-1"),
  "day-2": () => import("@/emails/letters/day-2"),
  "day-3": () => import("@/emails/letters/day-3"),
  "day-4": () => import("@/emails/letters/day-4"),
  "day-5": () => import("@/emails/letters/day-5"),
  "day-6": () => import("@/emails/letters/day-6"),
  "day-7": () => import("@/emails/letters/day-7"),
  "day-8": () => import("@/emails/letters/day-8"),
  "day-9": () => import("@/emails/letters/day-9"),
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(emailMap).map((slug) => ({ slug }));
}

export default async function LetterPage({ params }: Props) {
  const { slug } = await params;
  const loader = emailMap[slug];
  if (!loader) notFound();

  const mod = await loader();
  const html = await render(mod.default());

  return (
    <div style={{ backgroundColor: "#0a0a1a", minHeight: "100vh", padding: "0" }}>
      <ResponsiveEmailFrame html={html} title={slug} naturalWidth={600} />
    </div>
  );
}
