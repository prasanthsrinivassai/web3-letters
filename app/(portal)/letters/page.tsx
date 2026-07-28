import { LETTERS } from "@/lib/letters";
import Link from "next/link";
import Image from "next/image";

export default async function LettersPage() {

  return (
    <main className="min-h-screen bg-[#0a0a1a] text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <Image src="/assets/dots-grid.svg" alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="fixed top-0 left-0 right-0 h-64 bg-gradient-to-b from-purple-900/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="mb-4">
          <Image src="/assets/e42-logo.svg" alt="Enhance 42" width={116} height={26} />
        </div>
        <h1 className="text-4xl font-black mb-2">Gateway to <span className="text-purple-400">Web 3.0</span></h1>
        <p className="text-gray-400 mb-12">Your 10-letter course on Blockchain & Cryptocurrencies</p>

        <div className="space-y-3">
          {LETTERS.map((letter) => (
            <Link
              key={letter.day}
              href={`/letters/${letter.slug}`}
              className="flex items-center gap-4 border border-white/10 p-4 hover:border-[#00e5ff]/50 hover:bg-white/5 transition-all group"
            >
              <span className="text-[#00e5ff] font-mono text-sm w-12">Day {letter.day}</span>
              <span className="text-white group-hover:text-[#00e5ff] transition-colors">{letter.title}</span>
              <span className="ml-auto text-gray-600 group-hover:text-gray-400">→</span>
            </Link>
          ))}
        </div>

        <div className="mt-12 border border-white/10 p-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Join the community</p>
          <a
            href="https://discord.gg/REPLACE_ME"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 border border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-colors text-sm font-semibold"
          >
            Join Discord
          </a>
        </div>
      </div>
    </main>
  );
}
