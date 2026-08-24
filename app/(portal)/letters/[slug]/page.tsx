import { notFound } from "next/navigation";
import { render } from "@react-email/render";
import Link from "next/link";

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

  const day = parseInt(slug.replace("day-", ""), 10);
  const prevSlug = day > 0 ? `day-${day - 1}` : null;
  const nextSlug = day < 9 ? `day-${day + 1}` : null;

  const wrapStyle = {
    position: "fixed" as const,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    gap: "6px",
  };

  const buttonStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#000000",
    border: "2px solid #ffffff",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: "32px",
    fontWeight: 700,
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
  };

  const labelStyle = {
    fontSize: "11px",
    fontWeight: 600,
    fontFamily: "Arial, sans-serif",
    color: "#ffffff",
    backgroundColor: "rgba(10,10,26,0.85)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "10px",
    padding: "2px 8px",
    whiteSpace: "nowrap" as const,
  };

  return (
    <>
      {prevSlug && (
        <div style={{ ...wrapStyle, left: "16px" }}>
          <Link href={`/letters/${prevSlug}`} replace aria-label={`Go to Day ${day - 1}`} style={buttonStyle}>
            ←
          </Link>
          <span style={labelStyle}>Day {day - 1}</span>
        </div>
      )}
      {nextSlug && (
        <div style={{ ...wrapStyle, right: "16px" }}>
          <Link href={`/letters/${nextSlug}`} replace aria-label={`Go to Day ${day + 1}`} style={buttonStyle}>
            →
          </Link>
          <span style={labelStyle}>Day {day + 1}</span>
        </div>
      )}
      <iframe
        srcDoc={html}
        title={slug}
        style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
      />
    </>
  );
}
