import {
  Html,
  Body,
  Container,
  Text,
  Head,
  Preview,
  Img,
} from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Day6Email() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <Preview>Propelling Economies — how economies really work</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative" as const, zIndex: 0, overflow: "hidden" as const }}>
          {/* ── Decorative purple glows (Group 18xx) — reuse group-1823.png, alternating sides ── */}
          <Img
            src={`${BASE_URL}/assets/day-6/group-1823.png`}
            alt=""
            style={{
              position: "absolute",
              top: "-60px",
              left: "0px",
              width: "600px",
              height: "420px",
              maxWidth: "none",
              transform: "rotate(0deg) scale(1.15)",
              transformOrigin: "top center",
              filter: "blur(48px)",
              opacity: 1,
              zIndex: -10,
              pointerEvents: "none",
            }}
          />
          {/* Group 1837 (glow) — Figma 920:66571 x:851.08 y:1706.89 */}
          <Img src={`${BASE_URL}/assets/day-6/group-1837.png`} alt="" style={{ position: "absolute", top: "1210px", right: "0px", width: "400px", height: "757px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />
          {/* Group 1838 (glow) — Figma 920:66574 x:560.59 y:2944.22, centered behind Rectangle 37 & 38 */}
          <Img src={`${BASE_URL}/assets/day-6/group-1838.png`} alt="" style={{ position: "absolute", top: "2385px", left: "-5px", width: "600px", height: "852px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* ── Header — Rectangle 2 bg + "Propelling Economies" title ── */}
          <Img
            src={`${BASE_URL}/assets/day-6/rectangle-2.svg`}
            alt=""
            style={{ position: "absolute", top: "17px", left: "0", width: "600px", height: "138px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />
          <Img
            src={`${BASE_URL}/assets/day-6/propelling-economies.svg`}
            alt="Propelling Economies"
            style={{ position: "absolute", top: "68px", left: "57px", width: "304px", height: "29px", maxWidth: "none" }}
          />

          {/* Greeting — 906:58502 x:56 y:176 w:216 h:19 */}
          <Img
            src={`${BASE_URL}/assets/day-6/okay.svg`}
            alt="Okay, Crypto comrade,"
            style={{ position: "absolute", top: "176px", left: "56px", width: "216px", height: "19px", maxWidth: "none" }}
          />
          {/* Adult emoji — 909:58619 x:278 y:180 w:24 h:24 */}
          <Img
            src={`${BASE_URL}/assets/day-6/adult.png`}
            alt="🧑"
            style={{ position: "absolute", top: "173px", left: "278px", width: "24px", height: "24px", maxWidth: "none" }}
          />

          {/* Intro — 904:58488 x:58 y:218 w:480 h:375 */}
          <Img
            src={`${BASE_URL}/assets/day-6/another_bright.svg`}
            alt="Another bright day and you are a whole lot wiser!"
            style={{ position: "absolute", top: "218px", left: "58px", width: "480px", height: "375px", maxWidth: "none" }}
          />

          {/* Meme — Rectangle 32 x:152 y:622 w:295 h:216 */}
          <Img src={`${BASE_URL}/assets/day-6/meme-duck.gif`} alt="" style={{ position: "absolute", top: "622px", left: "152px", width: "295px", height: "216px", maxWidth: "none", borderRadius: "8px" }} />

          {/* "First, let's have a headstart" — 907:58503 x:58 y:856 w:480 h:337 */}
          <Img src={`${BASE_URL}/assets/day-6/first.svg`} alt="First, let's have a headstart with a brief on how economy basically works" style={{ position: "absolute", top: "856px", left: "58px", width: "480px", height: "337px", maxWidth: "none" }} />

          {/* Circular flow diagram — 909:58504 x:58 y:1220 w:273 h:197.7 */}
          <Img src={`${BASE_URL}/assets/day-6/circular-flow.png`} alt="" style={{ position: "absolute", top: "1220px", left: "58px", width: "273px", height: "197.7px", maxWidth: "none", borderRadius: "8px" }} />
          {/* Rectangle 35 — x:339.8 y:1233.6 w:203 h:171 */}
          <Img src={`${BASE_URL}/assets/day-6/rectangle-35.svg`} alt="" style={{ position: "absolute", top: "1233.6px", left: "339.8px", width: "203px", height: "171px", maxWidth: "none", borderRadius: "8px" }} />

          {/* "Credit is a form of transaction" — 909:58505 x:48 y:1442 w:504 h:279 */}
          <Img src={`${BASE_URL}/assets/day-6/credit.svg`} alt="Credit is a form of transaction between two parties called borrowers and lenders" style={{ position: "absolute", top: "1442px", left: "48px", width: "504px", height: "279px", maxWidth: "none" }} />

          {/* Rectangle 3 — 910:58621 x:608 y:1437 w:600 h:307, centered on the 600px page */}
          <Img src={`${BASE_URL}/assets/day-6/rectangle-3.svg`} alt="" style={{ position: "absolute", top: "1437px", left: "0px", width: "600px", height: "307px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }} />

          {/* Rectangle 33 — x:126 y:1772 w:348 h:216 */}
          <Img src={`${BASE_URL}/assets/day-6/rectangle-33.svg`} alt="" style={{ position: "absolute", top: "1772px", left: "126px", width: "348px", height: "216px", maxWidth: "none", borderRadius: "8px" }} />

          {/* "Debt is a major driver" — 909:58507 x:58 y:2001 w:482 h:612 */}
          <Img src={`${BASE_URL}/assets/day-6/debt.svg`} alt="Debt is a major driver in economic swing" style={{ position: "absolute", top: "2001px", left: "58px", width: "482px", height: "612px", maxWidth: "none" }} />

          {/* Recession comparison boxes — Rect 37 & 38, y:2645 h:330 */}
          <Img src={`${BASE_URL}/assets/day-6/rectangle-37.svg`} alt="" style={{ position: "absolute", top: "2645px", left: "57px", width: "246px", height: "330px", maxWidth: "none", borderRadius: "8px" }} />
          <Img src={`${BASE_URL}/assets/day-6/rectangle-38.svg`} alt="" style={{ position: "absolute", top: "2645px", left: "309.5px", width: "222px", height: "330px", maxWidth: "none", borderRadius: "8px" }} />

          {/* "When recession is severe" — 909:58508 x:58 y:2994 w:484 h:375 */}
          <Img src={`${BASE_URL}/assets/day-6/when-recession.svg`} alt="When recession is severe, the central bank pulls the interest rates down again" style={{ position: "absolute", top: "2994px", left: "58px", width: "484px", height: "375px", maxWidth: "none" }} />

          {/* Group 1839 (glow) — Figma 920:66577 x:478.75 y:3625.24, centered behind Rectangle 39 */}
          <Img src={`${BASE_URL}/assets/day-6/group-1839.svg`} alt="" style={{ position: "absolute", top: "3235px", left: "-20px", width: "640px", height: "600px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* Graph — Rectangle 39 x:152 y:3405 w:295 h:258 */}
          <Img src={`${BASE_URL}/assets/day-6/rectangle-39.svg`} alt="" style={{ position: "absolute", top: "3405px", left: "152px", width: "295px", height: "258px", maxWidth: "none", borderRadius: "8px" }} />

          {/* "Despite the fact that people" — 909:58509 x:64 y:3680 w:477 h:783 */}
          <Img src={`${BASE_URL}/assets/day-6/despite-the-fact.svg`} alt="Despite the fact that people are becoming more indebted" style={{ position: "absolute", top: "3680px", left: "64px", width: "477px", height: "783px", maxWidth: "none" }} />

          {/* Group 1840 (glow) — Figma 920:66580 x:523.38 y:4717.98, centered behind Rectangle 41 */}
          <Img src={`${BASE_URL}/assets/day-6/group-1840.svg`} alt="" style={{ position: "absolute", top: "4285px", left: "0px", width: "600px", height: "674px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* Debt Cycle diagram — Rectangle 41 x:164 y:4494 w:271 h:255 */}
          <Img src={`${BASE_URL}/assets/day-6/rectangle-41.svg`} alt="" style={{ position: "absolute", top: "4494px", left: "164px", width: "271px", height: "255px", maxWidth: "none", borderRadius: "8px" }} />

          {/* "The issue is that debt burdens" — 909:58510 x:58 y:4771 w:466 h:576 */}
          <Img src={`${BASE_URL}/assets/day-6/the-issue.svg`} alt="The issue is that debt burdens are far too high and must be reduced" style={{ position: "absolute", top: "4771px", left: "58px", width: "466px", height: "576px", maxWidth: "none" }} />

          {/* Group 1841 (glow) — Figma 920:66583 x:535.14 y:5579.87, centered behind Rectangle 40 */}
          <Img src={`${BASE_URL}/assets/day-6/group-1841.svg`} alt="" style={{ position: "absolute", top: "5305px", left: "-45px", width: "460px", height: "479px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />
          {/* Group 1842 (glow) — Figma 920:66586 x:310.42 y:5605.50, centered behind Rectangle 40 */}
          <Img src={`${BASE_URL}/assets/day-6/group-1842.svg`} alt="" style={{ position: "absolute", top: "5288px", left: "180px", width: "460px", height: "445px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* Rectangle 40 — x:147 y:5384 w:309 h:253 */}
          <Img src={`${BASE_URL}/assets/day-6/rectangle-40.svg`} alt="" style={{ position: "absolute", top: "5384px", left: "147px", width: "309px", height: "253px", maxWidth: "none", borderRadius: "8px" }} />

          {/* "In terms of macroeconomics" — 909:58511 x:58 y:5663 w:480 h:957 */}
          <Img src={`${BASE_URL}/assets/day-6/In-terms.svg`} alt="In terms of macroeconomics, there are a variety of schools of thoughts" style={{ position: "absolute", top: "5663px", left: "58px", width: "480px", height: "957px", maxWidth: "none" }} />

          {/* Group 1843 (glow) — Figma 920:66589 x:503.53 y:6963.53, spans behind the Keynesian/Austrian infographic */}
          <Img src={`${BASE_URL}/assets/day-6/group-1843.svg`} alt="" style={{ position: "absolute", top: "6550px", left: "0px", width: "600px", height: "729px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* Keynesian vs Austrian infographic — Rectangle 42 x:156 y:6654 w:289 h:485 */}
          <Img src={`${BASE_URL}/assets/day-6/rectangle-42.svg`} alt="" style={{ position: "absolute", top: "6654px", left: "156px", width: "289px", height: "485px", maxWidth: "none", borderRadius: "8px" }} />

          {/* "Despite the affects... guidelines" — 906:58501 x:58 y:7168 w:482 h:455 */}
          <Img src={`${BASE_URL}/assets/day-6/despite.svg`} alt="Despite the affects or needs of intervention, three general guidelines" style={{ position: "absolute", top: "7168px", left: "58px", width: "482px", height: "455px", maxWidth: "none" }} />
          <Text style={{ position: "absolute", top: "7605px", left: "173px", margin: 0, fontSize: "20px", lineHeight: 1 }}>😇</Text>

          {/* ── Footer ── */}
          {/* Ellipse 82 (footer bg glow, largest) — Figma 920:58654 x:-299.77 y:7458 */}
          <Img src={`${BASE_URL}/assets/day-6/ellipse-82.svg`} alt="" style={{ position: "absolute", top: "7580px", left: "0px", width: "600px", height: "306px", maxWidth: "none", opacity: 1, zIndex: -2, pointerEvents: "none" }} />
          {/* Ellipse 83 (footer bg glow, middle) — Figma 920:58655 x:-129.05 y:7589.77 */}
          <Img src={`${BASE_URL}/assets/day-6/ellipse-83.svg`} alt="" style={{ position: "absolute", top: "7680px", left: "0px", width: "600px", height: "209px", maxWidth: "none", opacity: 1, zIndex: 0, pointerEvents: "none" }} />
          {/* Footer glow — Ellipse 84 x:-88.76 y:7704 w:772.43 h:478.17 */}
          <Img src={`${BASE_URL}/assets/day-6/ellipse-81.svg`} alt="" style={{ position: "absolute", top: "7678px", left: "0px", width: "772.43px", height: "478.17px", maxWidth: "none", opacity: 1, zIndex: 0, pointerEvents: "none" }} />
          {/* Footer decorative grid — Group x:0 y:7744 w:600 h:148 */}
          <Img src={`${BASE_URL}/assets/day-6/group.svg`} alt="" style={{ position: "absolute", top: "7744px", left: "0px", width: "600px", height: "148px", maxWidth: "none", zIndex: 0, pointerEvents: "none" }} />
          {/* Footer background — Vector, moved into the Group box (identical bounds) */}
          <Img src={`${BASE_URL}/assets/day-6/vector.svg`} alt="" style={{ position: "absolute", top: "7744px", left: "0px", width: "600px", height: "148px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }} />
          {/* Enhance logo — Group 1836 x:231 y:7705 w:116 h:26 */}
          <Img src={`${BASE_URL}/assets/day-6/group-1827.svg`} alt="Enhance" style={{ position: "absolute", top: "7705px", left: "231px", width: "116px", height: "26px", maxWidth: "none", zIndex: 1 }} />
          {/* Social media icons — x:195 y:7757 w:193.3 h:25.3 */}
          <Img src={`${BASE_URL}/assets/day-6/social-media.svg`} alt="Follow us on social media" style={{ position: "absolute", top: "7757px", left: "195px", width: "193.3px", height: "25.3px", maxWidth: "none", zIndex: 1 }} />
          {/* Footer email text — x:84 y:7808 w:432 h:33 */}
          <Img src={`${BASE_URL}/assets/day-6/footer-email-text.svg`} alt="This email was sent to hello@hey.com. You can update your email subscription preferences at any time." style={{ position: "absolute", top: "7808px", left: "84px", width: "432px", height: "33px", maxWidth: "none", zIndex: 1 }} />
          {/* Copyright — Group 1835 x:208 y:7865 w:166 h:11 */}
          <Img src={`${BASE_URL}/assets/day-6/group-1826.svg`} alt="Copyright 2020 Enhance 42" style={{ position: "absolute", top: "7865px", left: "208px", width: "166px", height: "11px", maxWidth: "none", zIndex: 1 }} />
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#0a0a1a",
  fontFamily: "Arial, sans-serif",
  margin: "0",
  padding: "0",
};

const container = {
  backgroundColor: "#09040e",
  width: "600px",
  height: "7892px",
  margin: "0 auto",
  opacity: 1,
};
