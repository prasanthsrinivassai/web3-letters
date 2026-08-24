import { LETTERS } from "@/lib/letters";
import Link from "next/link";
import Image from "next/image";

const BASE = "/assets/letters";

export default async function LettersPage() {
  return (
    <main style={{ backgroundColor: "#0A0A0E", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", margin: "0", padding: "0" }}>
      <div style={{ maxWidth: "600px", width: "100%", backgroundColor: "#0A0A0E", border: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column" }}>

        <Image src={`${BASE}/upper-plane.svg`} width={600} height={66} alt="" style={{ display: "block", width: "100%", height: "auto" }} />

        <div style={{ padding: "24px 40px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <Image src={`${BASE}/Gateway-to-Web-3.0.png`} width={397} height={39} alt="Gateway to Web 3.0" style={{ display: "block", marginBottom: "8px" }} />
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", margin: "0 0 16px", textAlign: "center" }}>
            {"Your 10-letter course on Blockchain & Cryptocurrencies"}
          </p>
          {LETTERS.map((letter) => (
            <Link
              key={letter.day}
              href={`/letters/${letter.slug}`}
              style={{ display: "flex", alignItems: "center", gap: "16px", border: "1px solid rgba(255,255,255,0.1)", padding: "16px", textDecoration: "none", color: "#ffffff", width: "100%", boxSizing: "border-box" }}
            >
              <span style={{ color: "#00e5ff", fontFamily: "monospace", fontSize: "13px", width: "48px", flexShrink: 0 }}>
                {"Day " + letter.day}
              </span>
              <span style={{ color: "#ffffff", fontSize: "14px" }}>{letter.title}</span>
              <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.3)" }}>{">"}</span>
            </Link>
          ))}
        </div>

        <div style={{ position: "relative", width: "100%", height: "190px", overflow: "hidden", flexShrink: 0 }}>
          <Image src={`${BASE}/group-1827.svg`} width={116} height={26} alt="Enhance 42" style={{ position: "absolute", top: "0px", left: "239px", width: "116px", height: "26px" }} />
          <Image src={`${BASE}/vector.svg`} width={600} height={148} alt="" style={{ position: "absolute", top: "40px", left: "0px", width: "100%", height: "148px" }} />
          <Image src={`${BASE}/group.svg`} width={600} height={148} alt="" style={{ position: "absolute", top: "40px", left: "0px", width: "100%", height: "148px" }} />
          <Image src={`${BASE}/social-media.svg`} width={193} height={25} alt="Social media" style={{ position: "absolute", top: "53px", left: "203px", width: "193px", height: "25px" }} />
          <Image src={`${BASE}/footer-email-text.svg`} width={432} height={33} alt="" style={{ position: "absolute", top: "104px", left: "84px", width: "432px", height: "33px" }} />
          <Image src={`${BASE}/group-1826.svg`} width={166} height={11} alt="" style={{ position: "absolute", top: "161px", left: "216px", width: "166px", height: "11px" }} />
        </div>

      </div>
    </main>
  );
}
