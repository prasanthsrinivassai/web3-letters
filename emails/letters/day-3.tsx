import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Link,
  Head,
  Preview,
  Img,
} from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Day3Email() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <Preview>Web 1.0, Web 2.0, Web 3.0 — DeFi 1.0 & 2.0</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative" as const, zIndex: 0, overflow: "hidden" as const }}>
          {/* Full-page dots & grid background — Figma nodes 1037:29720 "D&G" + 1037:35922 "D&G" */}
          <Img
            src={`${BASE_URL}/assets/day-3/D%26G.png`}
            alt=""
            style={{ position: "absolute", top: 0, left: "-2px", width: "calc(100% + 4px)", height: "6403px", maxWidth: "none", zIndex: -1, pointerEvents: "none", WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 0.27%, transparent 0.27%, transparent 2.42%, black 2.42%)", maskImage: "linear-gradient(to bottom, black 0%, black 0.27%, transparent 0.27%, transparent 2.42%, black 2.42%)" }}
          />
          <Img
            src={`${BASE_URL}/assets/day-3/D%26G-1.png`}
            alt=""
            style={{ position: "absolute", top: "6403px", left: "-2px", width: "calc(100% + 4px)", height: "3473px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Header — Figma node 1052:20 "Mask group" + 900:34398 "Rectangle 2" */}
          <Section style={{ ...header, position: "absolute" as const, top: 0, left: 0, width: "100%", height: "164px", zIndex: 0, overflow: "hidden" as const }}>
            <Img
              src={`${BASE_URL}/assets/day-3/rectangle-2.svg`}
              alt=""
              style={{
                position: "absolute",
                top: "17px",
                left: 0,
                width: "600px",
                height: "138px",
                maxWidth: "none",
                zIndex: -2,
                pointerEvents: "none",
              }}
            />
            <Img
              src={`${BASE_URL}/assets/day-3/Mask-group.svg`}
              alt=""
              style={{ position: "absolute", top: 0, left: "48px", width: "639px", height: "150px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
            />
            <Img
              src={`${BASE_URL}/assets/day-3/Web-3.0-DeFi-2.0.svg`}
              alt="Web 3.0 DeFi 2.0"
              width="120"
              height="66"
              style={{ position: "absolute", top: "48px", left: "83px", width: "120px", height: "66px", maxWidth: "none", zIndex: 1 }}
            />
          </Section>

          {/* Greeting — Figma 899:25855 + waving hand emoji */}
          <Section style={{ position: "absolute" as const, top: "178px", left: "54px", width: "460px" }}>
            {"👋 "}
            <Img src={`${BASE_URL}/assets/day-3/Hello-Name.svg`} alt="Hello, <Name> !" width="127" height="19" style={{ display: "inline-block", verticalAlign: "middle" }} />
          </Section>

          {/* Figma 899:25882 */}
          <Img
            src={`${BASE_URL}/assets/day-3/Yesterday-text.svg`}
            alt="Yesterday, we broke off at a reflection of how blockchain technology is revolutionizing the world."
            style={{ position: "absolute", top: "236px", left: "58px", width: "484px", height: "1023px", maxWidth: "none" }}
          />

          {/* group.png — Figma 902:34526 */}
          <Img
            src={`${BASE_URL}/assets/day-3/group.png`}
            alt=""
            style={{ position: "absolute", top: "1572.28px", left: "522px", width: "78.36px", height: "125px", maxWidth: "none", transform: "rotate(0deg)", opacity: 1, zIndex: 1 }}
          />

          {/* Group 1824 — decorative glow behind ezgif-1.png */}
          <Img
            src={`${BASE_URL}/assets/day-3/group1824.svg`}
            alt=""
            style={{ position: "absolute", top: "1150px", left: "0px", width: "384px", height: "837px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Group 1825 — decorative glow behind ezgif-1.png */}
          <Img
            src={`${BASE_URL}/assets/day-3/group1825.svg`}
            alt=""
            style={{ position: "absolute", top: "1150px", left: "200px", width: "420px", height: "837px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* ezgif 1 — Figma 899:25854 */}
          <Img
            src={`${BASE_URL}/assets/day-3/ezgif-1.png`}
            alt=""
            style={{ position: "absolute", top: "1299px", left: "74px", width: "443px", height: "443px", maxWidth: "none", borderRadius: "5px" }}
          />

          {/* Figma 899:25856 */}
          <Img
            src={`${BASE_URL}/assets/day-3/In-decentralized.svg`}
            alt="In decentralized systems, intelligence is disseminated across their framework."
            style={{ position: "absolute", top: "1758px", left: "58px", width: "483px", height: "87px", maxWidth: "none" }}
          />

          {/* Figma 899:25857 */}
          <Img
            src={`${BASE_URL}/assets/day-3/We-have-five-forms.svg`}
            alt="We have five forms of decentralization that run the cause and effect order of decentralization."
            style={{ position: "absolute", top: "1884px", left: "58px", width: "478px", height: "975px", maxWidth: "none" }}
          />

          {/* Rectangle 19 — Figma 899:25859 */}
          <Img
            src={`${BASE_URL}/assets/day-3/rectangle-19.png`}
            alt=""
            style={{ position: "absolute", top: "2897px", left: "198px", width: "204px", height: "276px", maxWidth: "none", borderRadius: "5px" }}
          />

          {/* Frame 3 — Figma node 3871:20 (decorative glow, x:-56, y:3163, w:823.56, h:743.11) */}
          <Img
            src={`${BASE_URL}/assets/day-3/frame-3.svg`}
            alt=""
            style={{ position: "absolute", top: "3163px", left: 0, width: "600px", height: "744px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Group 1881 — Figma node 1046:2058 (x:169, y:3216, w:271, h:286.39) */}
          <Img
            src={`${BASE_URL}/assets/day-3/group-1881.svg`}
            alt=""
            style={{ position: "absolute", top: "3216px", left: "169px", width: "271px", height: "287px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Figma 899:25858 */}
          <Img
            src={`${BASE_URL}/assets/day-3/fast-forward.svg`}
            alt="Fast forward to 2022, Two major trends are shaping the world today, Web3 and the Internet's democratization. Metaverse and its impact on all parts of society."
            style={{ position: "absolute", top: "3430px", left: "58px", width: "374px", height: "337px", maxWidth: "none" }}
          />

          {/* Figma 1040:40813 */}
          <Img
            src={`${BASE_URL}/assets/day-3/And-both-trends.svg`}
            alt="And, both trends rely heavily on the technology of Non-Fungible Tokens (NFTs)."
            style={{ position: "absolute", top: "3823px", left: "61px", width: "465px", height: "183px", maxWidth: "none" }}
          />

          {/* Heading — Figma 900:34384 */}
          <Section style={{ position: "absolute" as const, top: "4016px", left: "56px", width: "409px" }}>
            <Text style={greeting}>Web 1.0, Web 2.0, Web 3.0</Text>
          </Section>

          {/* Group 1824 — decorative glow, Figma sizing 228.75 x 347.39 */}
          <Img
            src={`${BASE_URL}/assets/day-3/Group-1824.svg`}
            alt=""
            style={{ position: "absolute", top: "4054px", left: "-20px", width: "228.75px", height: "347.39px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Group 1825 — decorative glow, Figma sizing 108.16 x 164.21 */}
          <Img
            src={`${BASE_URL}/assets/day-3/Group-1825.svg`}
            alt=""
            style={{ position: "absolute", top: "4150px", left: "511.84px", width: "108.16px", height: "164.21px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Figma 899:25864 */}
          <Img
            src={`${BASE_URL}/assets/day-3/Web-1.0.svg`}
            alt="Web 1.0 was the early internet made up of static HTML web pages that displayed non-interactive, centrally sourced material."
            style={{ position: "absolute", top: "4054px", left: "58px", width: "484px", height: "1246px", maxWidth: "none" }}
          />

          {/* elastos_WEB3-POST — Figma 899:25870 */}
          <Img
            src={`${BASE_URL}/assets/day-3/elastos-web3-post.png`}
            alt=""
            style={{ position: "absolute", top: "5325px", left: "106px", width: "388px", height: "267px", maxWidth: "none", borderRadius: "5px" }}
          />

          {/* Figma 899:25865 */}
          <Img
            src={`${BASE_URL}/assets/day-3/Blockchain-technologies.svg`}
            alt="Blockchain technologies such as Ethereum aid in the development of open financial systems."
            style={{ position: "absolute", top: "5633px", left: "58px", width: "483px", height: "405px", maxWidth: "none" }}
          />

          {/* Group 3 — Figma node 900:34390 (decorative, x:164, y:5697.65, w:225, h:298.88) */}
          <Img
            src={`${BASE_URL}/assets/day-3/Group-3.png`}
            alt=""
            style={{ position: "absolute", top: "5610px", left: "120px", width: "360px", height: "478px", maxWidth: "none", transform: "rotate(0deg)", opacity: 1, zIndex: -1, pointerEvents: "none" }}
          />

          {/* unnamed (4) — Figma 899:25866 */}
          <Img
            src={`${BASE_URL}/assets/day-3/unnamed-4.png`}
            alt=""
            style={{ position: "absolute", top: "6073px", left: "138px", width: "323px", height: "202px", maxWidth: "none", borderRadius: "7px" }}
          />

          {/* group-1.png — Figma 902:34518 */}
          <Img
            src={`${BASE_URL}/assets/day-3/group-1.png`}
            alt=""
            style={{ position: "absolute", top: "6287px", left: "522px", width: "78px", height: "105px", maxWidth: "none", transform: "rotate(-4deg)", opacity: 1, zIndex: 1 }}
          />

          {/* Figma 899:25867 */}
          <Img
            src={`${BASE_URL}/assets/day-3/protocols.svg`}
            alt="Liquidity Pools are a masterpiece DeFi invention that allows traders to trade on Decentralized Exchanges (DEX) and provide liquidity via a pool of funds locked in a smart contract."
            style={{ position: "absolute", top: "6302px", left: "58px", width: "481px", height: "1071px", maxWidth: "none" }}
          />

          {/* Group 1824 — Figma node 902:34494 (x:416.71, y:6882.4, w:469.05, h:501.85) */}
          <Img
            src={`${BASE_URL}/assets/day-3/Group-1824.png`}
            alt=""
            style={{ position: "absolute", top: "6387px", left: "64px", width: "469.05px", height: "501.85px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* d3418eb — Figma 899:25869 */}
          <Img
            src={`${BASE_URL}/assets/day-3/defi-image.png`}
            alt=""
            style={{ position: "absolute", top: "7409px", left: "111px", width: "379px", height: "403px", maxWidth: "none", borderRadius: "5px" }}
          />

          {/* Group 1825 — decorative glow behind #DApps section */}
          <Img
            src={`${BASE_URL}/assets/day-3/group-1825.png`}
            alt=""
            style={{
              position: "absolute",
              top: "7830px",
              left: "150px",
              width: "650px",
              height: "942px",
              maxWidth: "none",
              zIndex: -1,
              pointerEvents: "none",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 25%)",
            }}
          />

          {/* Group 1824 — decorative glow behind #DApps section */}
          <Img
            src={`${BASE_URL}/assets/day-3/Group-1824.png`}
            alt=""
            style={{ position: "absolute", top: "7630px", left: "-80px", width: "520px", height: "556px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Figma 899:25868 — cropped to exclude the last line (broken emoji glyph in the SVG export) */}
          <div style={{ position: "absolute", top: "7860px", left: "58px", width: "481px", height: "1685px", overflow: "hidden" as const }}>
            <Img
              src={`${BASE_URL}/assets/day-3/DApps.svg`}
              alt="#DApps are substantial windows for implementation of DeFi"
              style={{ position: "absolute", top: 0, left: 0, width: "481px", height: "1731px", maxWidth: "none" }}
            />
          </div>
          {/* Clickable overlay for the "link" word baked into DApps.svg */}
          <Link href="https://web3isgoingreat.com" style={{ position: "absolute", top: "9263px", left: "134px", width: "28px", height: "17px", display: "block", zIndex: 2 }} />
          {/* Closing line rendered as real text so the emoji displays correctly, matching the SVG's purple */}
          <Text style={{ ...bodyText, position: "absolute" as const, top: "9545px", left: "58px", width: "481px", color: "#B12CFA", fontWeight: 700, margin: 0 }}>
            (...and Kudos on heading strong towards a cypherpunk dream of decentralized future. ✌️)
          </Text>

          {/* group-2.png — Figma 900:34375 */}
          <Img
            src={`${BASE_URL}/assets/day-3/group-2.png`}
            alt=""
            style={{ position: "absolute", top: "8102px", left: "0px", width: "63px", height: "110px", maxWidth: "none", transform: "rotate(12deg)", opacity: 1, zIndex: 1 }}
          />

          {/* Rectangle 103 — Figma node 1068:713 (decorative, x:615, y:8910, w:631, h:505) */}
          <Img
            src={`${BASE_URL}/assets/day-3/rectangle-103.png`}
            alt=""
            style={{ position: "absolute", top: "8860px", left: 0, width: "600px", height: "589px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Left-Facing Fist — Figma instance 900:34386 (x:191, y:9503, w:20, h:20) */}
          <Img
            src={`${BASE_URL}/assets/day-3/Left-Facing-Fist.png`}
            alt=""
            width="20"
            height="20"
            style={{ position: "absolute", top: "9500px", left: "191px" }}
          />

          {/* Footer — Figma node 1040:40746 */}
          <Section style={{ ...footerWrapper, position: "absolute" as const, top: "8874px", left: 0, width: "100%", height: "1001px", zIndex: 0 }}>
            <Img
              src={`${BASE_URL}/assets/day-3/Footer.svg`}
              alt=""
              width="600"
              height="1001"
              style={{ display: "block", width: "100%", height: "1001px" }}
            />
          </Section>
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
  height: "9875px",
  margin: "0 auto",
  opacity: 1,
};

const header = {
  padding: "0",
  textAlign: "center" as const,
};

const greeting = {
  fontFamily: "'Quantico', sans-serif",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "150%",
  letterSpacing: "0px",
  color: "#ffffff",
  margin: "0 0 4px",
  textAlign: "left" as const,
};

const bodyText = {
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: "0px",
  color: "rgba(255,255,255,0.85)",
  margin: "0 0 20px",
  textAlign: "left" as const,
};

const listItem = {
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "150%",
  letterSpacing: "0px",
  color: "rgba(255,255,255,0.85)",
  marginBottom: "10px",
  textAlign: "left" as const,
};

const link = {
  color: "#00e5ff",
  textDecoration: "none",
};

const footerWrapper = {};
