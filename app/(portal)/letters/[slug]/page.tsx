import { notFound } from "next/navigation";
import { getLetterBySlug, LETTERS } from "@/lib/letters";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LETTERS.map((l) => ({ slug: l.slug }));
}

export default async function LetterPage({ params }: Props) {
  const { slug } = await params;
  const letter = getLetterBySlug(slug);
  if (!letter) notFound();

  const prev = LETTERS.find((l) => l.day === letter.day - 1);
  const next = LETTERS.find((l) => l.day === letter.day + 1);

  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <Image src="/assets/dots-grid.svg" alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="fixed top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-900/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
            <Link
            href="/letters"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors"
          >
            ← All letters
          </Link>
          <Image src="/assets/e42-logo.svg" alt="Enhance 42" width={96} height={22} />
        </div>

        <p className="text-[#00e5ff] text-xs font-semibold tracking-widest uppercase mb-2">
          Day {letter.day}
        </p>
        <h1 className="text-3xl font-black mb-10">{letter.title}</h1>

        <article
          className="prose prose-invert prose-sm max-w-none
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-h2:text-white prose-h2:font-bold prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:my-1
            prose-strong:text-white
            prose-a:text-[#00e5ff] prose-a:no-underline hover:prose-a:underline
            prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:text-gray-300
            prose-code:text-[#00e5ff] prose-code:bg-white/5 prose-code:px-1 prose-code:rounded"
          dangerouslySetInnerHTML={{ __html: letter.content }}
        />

        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between">
          {prev ? (
            <Link
              href={`/letters/${prev.slug}`}
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              ← Day {prev.day}: {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/letters/${next.slug}`}
              className="text-sm text-[#00e5ff] hover:text-white transition-colors"
            >
              Day {next.day}: {next.title} →
            </Link>
          ) : (
            <span className="text-sm text-gray-600">You've finished the course</span>
          )}
        </div>
      </div>
    </main>
  );
}
