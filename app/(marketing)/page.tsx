import Link from "next/link";
import { ScaleToFit } from "@/components/ScaleToFit";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-y-auto bg-[#0a0a1a] flex items-start justify-center py-2 px-4">

      {/* ── 600px card, scaled to fit any viewport ───────────────────────────────────── */}
      <div className="w-full" style={{ maxWidth: "600px" }}>
      <ScaleToFit naturalWidth={600} naturalHeight={800}>
      <main className="w-[600px] h-[800px] mx-auto relative overflow-hidden flex flex-col bg-[#09040e] text-white border border-purple-900/30 rounded-none">

        {/* ══════════════════════════════════════════════════════════
            SECTION 1+2 — HEADER + HEADLINE, one continuous gradient
        ══════════════════════════════════════════════════════════ */}
        <div
          className="relative overflow-visible flex-1 flex flex-col"
        >
          {/* Vector-1 cube — top left, partially off left edge per Figma */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Vector-1.png"
            alt=""
            className="absolute pointer-events-none z-20 max-w-none"
            style={{ width: "55px", height: "75.59764099121094px", top: "28px", left: "0px", opacity: 1, border: "0.5px solid transparent" }}
          />

          {/* Top banner strip: grid lines, cube, logo */}
          <div className="relative h-[72px] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/Upper-plane.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            />
          </div>

          {/* Ellipse ring lines overlaying the upper-plane, extending below the banner strip */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Ellipse-109.png"
            alt=""
            className="absolute left-1/2 top-[75px] w-[140%] pointer-events-none z-10"
            style={{
              transform: "translate(-50%, -50%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Ellipse-110.png"
            alt=""
            className="absolute left-1/2 top-[75px] w-[140%] pointer-events-none z-10"
            style={{
              transform: "translate(-50%, -50%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 50%)",
            }}
          />

          {/* Lens flare — centered on the border line between banner and headline */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/star.png"
            alt=""
            className="absolute top-[30px] right-0 w-16 h-32 pointer-events-none z-30 brightness-200 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
            style={{ transform: "scaleY(1.5)" }}
          />

          {/* Headline block + Body + Footer */}
          <div className="relative overflow-hidden flex-1 flex flex-col">

          {/* Dots background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Dots.png"
            alt=""
            className="absolute right-[-1px] -top-[20px] w-full h-full pointer-events-none z-0 opacity-100 object-cover"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 4%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 4%)",
            }}
          />

          {/* Grid background overlay */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Grid.png"
            alt=""
            className="absolute left-[-2px] top-[16px] w-full h-full pointer-events-none z-0 opacity-100 object-cover"
          />

          <div className="relative overflow-visible px-8 pt-6 pb-5" style={{ minHeight: "150px" }}>

            {/* Wormhole mesh — sized to Figma selection box */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/Wormhole.png"
              alt=""
              className="absolute -top-[72px] right-0 w-[270px] h-[279px] object-contain pointer-events-none mix-blend-screen opacity-100 brightness-150 contrast-125 z-10"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, transparent 25%, black 40%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 25%, black 40%)",
              }}
            />

            {/* Two tiny pink sparkles inside the wormhole curve */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/star.png"
              alt=""
              className="absolute top-[88px] right-[130px] w-2.5 h-2.5 pointer-events-none z-20 hue-rotate-300 brightness-150"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/star.png"
              alt=""
              className="absolute top-[98px] right-[132px] w-2 h-2 pointer-events-none z-20 hue-rotate-300 brightness-150"
            />

            {/* Heading */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/Gateway-to-Web-3.0.png"
              alt="Gateway to Web 3.0"
              className="absolute z-10 max-w-none"
              style={{
                width: "394.588134765625px",
                height: "37.20000076293945px",
                top: "45px",
                left: "50px",
                opacity: 1,
              }}
            />

            {/* Subheading */}
            <p
              className="absolute z-10 text-gray-400"
              style={{
                width: "481px",
                height: "40px",
                top: "90px",
                left: "47px",
                opacity: 1,
                fontFamily: "'Quantico', sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0.74px",
                verticalAlign: "middle",
              }}
            >
              A trip into the realms of Blockchain &amp; Cryptocurrencies
            </p>

          </div>

          {/* ══════════════════════════════════════════════════════════
              SECTION 3 — BODY CONTENT ON DOTS GRID
          ══════════════════════════════════════════════════════════ */}
          <div className="relative overflow-hidden pt-2 pb-6" style={{ paddingLeft: "50px", paddingRight: "32px" }}>

          {/* Greeting */}
          <p className="relative z-10 text-white mb-1" style={{ fontFamily: "'Quantico', sans-serif", fontWeight: 400, fontSize: "32px", lineHeight: "100%", letterSpacing: "0px" }}>Voilà! 👋</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/text.svg"
            alt=""
            className="relative z-10 max-w-none"
            style={{ width: "428px", height: "170px" }}
          />

          {/* CTA buttons */}
          <div className="relative z-10 flex flex-row gap-2 mb-5">
            <Link
              href="/sign-up"
              className="text-center text-white transition-colors hover:brightness-110"
              style={{
                width: "163px",
                height: "40px",
                backgroundColor: "#0A0A0E",
                border: "1px solid white",
                borderRadius: "4px",
                boxShadow: "2px 2px 0px white",
                fontFamily: "'Quantico', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "40px",
                letterSpacing: "0px",
                opacity: 1,
                display: "inline-block",
              }}
            >
              Join the Course
            </Link>
            <Link href="/letters" className="flex items-center hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/bttn.svg" alt="Get Started" width={165} height={42} className="max-w-none" />
            </Link>
            <Link
              href="/sign-in"
              className="text-center text-white transition-colors hover:brightness-110"
              style={{
                height: "40px",
                padding: "0 20px",
                backgroundColor: "#0A0A0E",
                border: "1px solid white",
                borderRadius: "4px",
                boxShadow: "2px 2px 0px white",
                fontFamily: "'Quantico', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                lineHeight: "40px",
                display: "inline-block",
              }}
            >
              Sign in
            </Link>
          </div>

          {/* Feature cards */}
          <div className="relative z-10 grid grid-cols-3 gap-2 w-[400px]">
            {[
              { label: "10 Letters", desc: "Delivered over 10 days" },
              { label: "Web Portal", desc: "Read anytime, anywhere" },
              { label: "Discord", desc: "Community of learners" },
            ].map((item) => (
              <div key={item.label} className="border border-white/10 p-2 bg-[#0a0612]">
                <p className="text-[#00e5ff] font-bold text-xs">{item.label}</p>
                <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>

          </div>

          {/* ══════════════════════════════════════════════════════════
              SECTION 4 — FOOTER: purple floor rising into gradient
          ══════════════════════════════════════════════════════════ */}
          <div className="relative z-10 mt-auto px-8 pt-4 pb-3 text-center">
            <p className="text-gray-600 text-[10px]">Copyright 2024 © Enhance42</p>
          </div>

          {/* email.svg — Figma: top 718px, left 40px (646px from shared wrapper top) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/email.svg"
            alt=""
            className="absolute z-20 max-w-none"
            style={{ width: "520px", height: "49px", top: "630px", left: "40px", opacity: 1 }}
          />

          {/* e42 logo — just above the bottom plane */}
          <div className="absolute z-20 left-0 w-full flex justify-center" style={{ bottom: "168px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/e42-logo.svg"
              alt="Enhance 42"
              className="max-w-none"
              style={{ width: "115.9998779296875px", height: "26px", opacity: 1 }}
            />
          </div>

          {/* Vector cube — bottom right */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/Vector.png"
            alt=""
            className="absolute pointer-events-none z-20 max-w-none"
            style={{ width: "66.88px", height: "62.51px", top: "408px", left: "547.73px", opacity: 1, border: "0.41px solid transparent" }}
          />

          {/* social-media icons — Figma: top 667px, left 204px (595px from shared wrapper top) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/social-media.svg"
            alt="Social media links"
            className="absolute z-20 max-w-none"
            style={{ width: "193.29713439941406px", height: "25.297046661376953px", top: "580px", left: "204px", opacity: 1 }}
          />

          {/* Perspective floor grid — flush against the bottom edge of the page */}
          <div className="absolute bottom-0 left-0 w-full h-[160px] z-0 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bottomplane-color.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bottom-plane.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-10"
            />
          </div>

          </div>
        </div>

      </main>
      </ScaleToFit>
      </div>
    </div>
  );
}
