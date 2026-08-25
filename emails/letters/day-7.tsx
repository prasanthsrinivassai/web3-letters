import {
  Html,
  Body,
  Container,
  Head,
  Preview,
  Img,
} from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Day7Email() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <Preview>Compounding Value — trading, investing, mining &amp; staking</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative" as const, zIndex: 0, overflow: "hidden" as const }}>
          {/* ── Decorative glows (Group 18xx) ── */}
          {/* Group 1844 (header glow) — Figma 921:66695 x:451.55 y:123.6 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1844.png`} alt="" style={{ position: "absolute", top: "-70px", left: "0px", width: "600px", height: "419px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />
          <Img src={`${BASE_URL}/assets/day-7/group1-1844.svg`} alt="" style={{ position: "absolute", top: "459px", left: "17px", width: "567px", height: "532px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* ── Header — Rectangle 2 bg + "Compounding Value" title ── */}
          <Img
            src={`${BASE_URL}/assets/day-7/rectangle-2.svg`}
            alt=""
            style={{ position: "absolute", top: "17px", left: "0", width: "600px", height: "138px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />
          {/* Heading "Compounding Value" — 921:66679 x:56 y:65 w:282 h:29 */}
          <Img src={`${BASE_URL}/assets/day-7/compounding-value.svg`} alt="Compounding Value" style={{ position: "absolute", top: "65px", left: "56px", width: "282px", height: "29px", maxWidth: "none" }} />
          {/* Bear/investor badge — 998:25 x:450 y:7 w:170 h:170 */}
          <Img src={`${BASE_URL}/assets/day-7/89.svg`} alt="" style={{ position: "absolute", top: "7px", left: "450px", width: "150px", height: "170px", maxWidth: "none" }} />

          {/* Greeting + Intro "Great day <name>..." — 920:66592 x:58 y:177 w:472 h:378 */}
          <Img src={`${BASE_URL}/assets/day-7/great-day.svg`} alt="Great day <name>" style={{ position: "absolute", top: "177px", left: "58px", width: "472px", height: "378px", maxWidth: "none" }} />

          {/* "images 1" — Trading Crypto graphic — x:175 y:603 w:250.7 h:243 */}
          <Img src={`${BASE_URL}/assets/day-7/images-1.svg`} alt="" style={{ position: "absolute", top: "603px", left: "175px", width: "251px", height: "243px", maxWidth: "none", borderRadius: "8px" }} />

          {/* "So, now..." — 920:66597 x:58 y:871 w:481 h:495 */}
          <Img src={`${BASE_URL}/assets/day-7/so-now.svg`} alt="So, now... to earn in the crypto space" style={{ position: "absolute", top: "871px", left: "58px", width: "481px", height: "495px", maxWidth: "none" }} />

          {/* Rectangle 43 — value investor graphic — x:155 y:1392 w:285 h:280 */}
          <Img src={`${BASE_URL}/assets/day-7/rectangle-43.svg`} alt="" style={{ position: "absolute", top: "1392px", left: "155px", width: "285px", height: "280px", maxWidth: "none", borderRadius: "8px" }} />

          {/* Group 1846 (glow) — Figma 921:66701 x:507.2 y:1655.67 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1846.svg`} alt="" style={{ position: "absolute", top: "1183px", left: "-3px", width: "600px", height: "699px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* "The concept of investment..." — 920:66598 x:58 y:1692 w:479 h:519 */}
          <Img src={`${BASE_URL}/assets/day-7/the-concept.svg`} alt="The concept of investment is based on the expectation of a return" style={{ position: "absolute", top: "1692px", left: "58px", width: "479px", height: "519px", maxWidth: "none" }} />

          {/* Twitter screenshots — DbJa8eqU / DbOjP2hV — x:115/309 y:2261 w:185/185 h:254/253 */}
          <Img src={`${BASE_URL}/assets/day-7/DbJa8eqU8AAB8hf-1.svg`} alt="" style={{ position: "absolute", top: "2261px", left: "115px", width: "185px", height: "254px", maxWidth: "none", borderRadius: "8px" }} />
          <Img src={`${BASE_URL}/assets/day-7/DbOjP2hVwAA4aoS-1.svg`} alt="" style={{ position: "absolute", top: "2261px", left: "309px", width: "185px", height: "253px", maxWidth: "none", borderRadius: "8px" }} />

          {/* Group 1847 (glow) — Figma 921:66704 x:512.2 y:2516.96 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1847.svg`} alt="" style={{ position: "absolute", top: "2038px", left: "5px", width: "600px", height: "699px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* "Where there is no apparent..." — 920:66600 x:58 y:2539 w:484 h:597 */}
          <Img src={`${BASE_URL}/assets/day-7/software.svg`} alt="Where there is no apparent directional trend" style={{ position: "absolute", top: "2539px", left: "58px", width: "484px", height: "597px", maxWidth: "none" }} />

          {/* Rectangle 46 — "When 'hopium' is no longer enough" — x:92 y:3178 w:416 h:255 */}
          <Img src={`${BASE_URL}/assets/day-7/rectangle-46.svg`} alt="" style={{ position: "absolute", top: "3178px", left: "92px", width: "416px", height: "255px", maxWidth: "none", borderRadius: "8px" }} />

          {/* Group 1848 (glow) — Figma 921:66707 x:524.2 y:3455.36 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1848.svg`} alt="" style={{ position: "absolute", top: "2956px", left: "0px", width: "600px", height: "699px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* "How you choose the cryptocurrency..." — 920:66601 x:58 y:3456 w:480 h:834 */}
          <Img src={`${BASE_URL}/assets/day-7/money-spent.svg`} alt="How you choose the cryptocurrency you wish to invest in" style={{ position: "absolute", top: "3456px", left: "58px", width: "480px", height: "834px", maxWidth: "none" }} />

          {/* ROI chart — BCowen_ROI_crypto — x:62 y:3780 w:476 h:256.6 */}
          <Img src={`${BASE_URL}/assets/day-7/BCowen_ROI_crypto-1.svg`} alt="ROI ratios of some popular coins" style={{ position: "absolute", top: "3780px", left: "62px", width: "476px", height: "257px", maxWidth: "none", opacity: 1 }} />

          {/* Group 1849 (glow) — Figma 921:66710 x:529.02 y:4083.71 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1849.svg`} alt="" style={{ position: "absolute", top: "3564px", left: "0px", width: "600px", height: "769px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* Mining flow diagram — Rectangle 50 — x:180 y:4330 w:240 h:616 */}
          <Img src={`${BASE_URL}/assets/day-7/rectangle-50.svg`} alt="" style={{ position: "absolute", top: "4330px", left: "180px", width: "240px", height: "616px", maxWidth: "none", borderRadius: "8px" }} />

          {/* Group 1850 (glow) — Figma 921:66713 x:460.55 y:4393.10 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1850.svg`} alt="" style={{ position: "absolute", top: "4212px", left: "0px", width: "600px", height: "928px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* "New blockchain transactions..." — 920:66602 x:58 y:4973 w:477 h:777 */}
          <Img src={`${BASE_URL}/assets/day-7/new-blockchain.svg`} alt="New blockchain transactions are transmitted to a memory pool" style={{ position: "absolute", top: "4973px", left: "58px", width: "477px", height: "777px", maxWidth: "none" }} />

          {/* Rectangle 3 (bg) — Figma 920:66609 x:608 y:5393 w:600 h:192, centered on the 600px page */}
          <Img src={`${BASE_URL}/assets/day-7/rectangle-3.svg`} alt="" style={{ position: "absolute", top: "5393px", left: "0px", width: "600px", height: "192px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }} />

          {/* Group 1851 (glow) — Figma 921:66716 x:283.36 y:5666.31 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1851.svg`} alt="" style={{ position: "absolute", top: "5150px", left: "0px", width: "467px", height: "769px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* "Mining pools are collectives..." — 920:66604 x:57 y:5775 w:505 h:1099 */}
          <Img src={`${BASE_URL}/assets/day-7/mining-pools.svg`} alt="Mining pools are collectives of miners" style={{ position: "absolute", top: "5775px", left: "57px", width: "505px", height: "1099px", maxWidth: "none" }} />

          {/* Rectangle 51 — PoW vs PoS comparison — x:126 y:6914 w:347 h:277 */}
          <Img src={`${BASE_URL}/assets/day-7/rectangle-51.svg`} alt="" style={{ position: "absolute", top: "6914px", left: "126px", width: "347px", height: "277px", maxWidth: "none", borderRadius: "8px" }} />

          {/* Rectangle 78 (bg) — x:-8 y:7322 w:608 h:906, centered on the 600px page */}
          <Img src={`${BASE_URL}/assets/day-7/rectangle-78.svg`} alt="" style={{ position: "absolute", top: "7322px", left: "0px", width: "600px", height: "906px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* WazirX logo — x:253 y:7436 w:93 h:93 */}
          <Img src={`${BASE_URL}/assets/day-7/wazirx-logo-E3F3BCD7A9-seeklogo-1.svg`} alt="WazirX" style={{ position: "absolute", top: "7436px", left: "253px", width: "93px", height: "93px", maxWidth: "none", opacity: 1 }} />

          {/* "So, here's for you to get started with cryptocurrency trading..." (WazirX KYC steps) — x:60 y:7220 w:505 h:964 */}
          <Img src={`${BASE_URL}/assets/day-7/similar.svg`} alt="So, here's for you to get started with cryptocurrency trading" style={{ position: "absolute", top: "7220px", left: "60px", width: "505px", height: "964px", maxWidth: "none" }} />

          {/* Group 1853 (glow) — Figma 921:66722 x:350.29 y:7233.13 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1853.svg`} alt="" style={{ position: "absolute", top: "6936px", left: "-10px", width: "473px", height: "511px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />
          {/* Group 1854 (glow) — Figma 921:66725 x:549.15 y:7171.84 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1854.svg`} alt="" style={{ position: "absolute", top: "6900px", left: "215px", width: "379px", height: "397px", maxWidth: "none", opacity: 1, zIndex: -1, pointerEvents: "none" }} />

          {/* Group 1855 (glow) — Figma 921:66728 x:323.02 y:8165.99 */}
          <Img
            src={`${BASE_URL}/assets/day-7/group-1855.svg`}
            alt=""
            style={{
              position: "absolute",
              top: "7700px",
              left: "0px",
              width: "507px",
              height: "769px",
              maxWidth: "none",
              opacity: 0.8,
              zIndex: -2,
              pointerEvents: "none",
            }}
          />

          {/* ── Footer ── */}
          {/* Ellipse 85 (footer bg glow, largest) — Figma 921:66647 x:-298.77 y:8108 */}
          <Img src={`${BASE_URL}/assets/day-7/ellipse-85.svg`} alt="" style={{ position: "absolute", top: "8230px", left: "0px", width: "600px", height: "308px", maxWidth: "none", opacity: 1, zIndex: -2, pointerEvents: "none" }} />
          {/* Ellipse 86 (footer bg glow, middle) — Figma 921:66648 x:-128.05 y:8239.77 */}
          <Img src={`${BASE_URL}/assets/day-7/ellipse-86.svg`} alt="" style={{ position: "absolute", top: "8331px", left: "0px", width: "600px", height: "211px", maxWidth: "none", opacity: 1, zIndex: 0, pointerEvents: "none" }} />

          {/* Footer background — Vector x:2 y:8394 w:599 h:263 */}
          <Img src={`${BASE_URL}/assets/day-7/vector.svg`} alt="" style={{ position: "absolute", top: "8394px", left: "0px", width: "600px", height: "148px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }} />
          {/* Footer decorative grid — Group x:0 y:8393 w:600 h:148 */}
          <Img src={`${BASE_URL}/assets/day-7/group.svg`} alt="" style={{ position: "absolute", top: "8393px", left: "0px", width: "600px", height: "148px", maxWidth: "none", zIndex: 0, pointerEvents: "none" }} />
          {/* Enhance logo — Group 1845 x:232 y:8355 w:116 h:26 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1827.svg`} alt="Enhance" style={{ position: "absolute", top: "8355px", left: "232px", width: "116px", height: "26px", maxWidth: "none", zIndex: 1 }} />
          {/* Social media icons — x:196 y:8407 w:193.3 h:25.3 */}
          <Img src={`${BASE_URL}/assets/day-7/social-media.svg`} alt="Follow us on social media" style={{ position: "absolute", top: "8407px", left: "196px", width: "193.3px", height: "25.3px", maxWidth: "none", zIndex: 1 }} />
          {/* Footer email text — x:32 y:8458 w:520 h:49 */}
          <Img src={`${BASE_URL}/assets/day-7/footer-email-text.svg`} alt="This email was sent to hello@hey.com. You can update your email subscription preferences at any time." style={{ position: "absolute", top: "8458px", left: "84px", width: "432px", height: "33px", maxWidth: "none", zIndex: 1 }} />
          {/* Copyright — Group 1844 x:209 y:8515 w:166 h:11 */}
          <Img src={`${BASE_URL}/assets/day-7/group-1826.svg`} alt="Copyright 2020 Enhance 42" style={{ position: "absolute", top: "8515px", left: "209px", width: "166px", height: "11px", maxWidth: "none", zIndex: 1 }} />
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
  height: "8544px",
  margin: "0 auto",
  opacity: 1,
};
