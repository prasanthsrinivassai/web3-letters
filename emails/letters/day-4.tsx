import {
  Html,
  Body,
  Container,
  Section,
  Head,
  Preview,
  Img,
} from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Day4Email() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <Preview>Cryptocurrency Wallets: Creation of a Cold Wallet</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative" as const, zIndex: 0, overflow: "hidden" as const }}>
          {/* Full-page dots & grid background — Figma 1058:1711 + 1058:7913 */}
          <Img
            src={`${BASE_URL}/assets/day-4/grid-bg.svg`}
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "600px",
              height: "6008.86px",
              maxWidth: "none",
              zIndex: -1,
              pointerEvents: "none",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 2.6%, black 3.3%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, transparent 2.6%, black 3.3%)",
            }}
          />
          <Img
            src={`${BASE_URL}/assets/day-4/grid-bg-1.svg`}
            alt=""
            style={{ position: "absolute", top: "6008.86px", left: 0, width: "600px", height: "1941.14px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Header — Figma 1058:1706 "Rectangle 102" + 1058:1705 "Group 1882" + 902:42533 title */}
          <Img
            src={`${BASE_URL}/assets/day-4/rectangle-102.svg`}
            alt=""
            style={{ position: "absolute", top: "1px", left: "1px", width: "600px", height: "159px", maxWidth: "none", zIndex: -2, pointerEvents: "none" }}
          />
          <Img
            src={`${BASE_URL}/assets/day-4/group-1882.svg`}
            alt=""
            style={{
              position: "absolute",
              top: "-58px",
              left: 0,
              width: "627.07px",
              height: "279.17px",
              maxWidth: "none",
              transform: "rotate(0deg)",
              opacity: 0.7,
              zIndex: -1,
              pointerEvents: "none",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 80%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 80%)",
            }}
          />
          <Img
            src={`${BASE_URL}/assets/day-4/title-heading.svg`}
            alt="Cryptocurrency Wallets: Creation of a Cold Wallet"
            style={{ position: "absolute", top: "42px", left: "51px", width: "362px", height: "86px", maxWidth: "none" }}
          />

          {/* Greeting — Figma 902:34535 + 983:66 emoji */}
          <Section style={{ position: "absolute" as const, top: "177px", left: "57px", width: "489px" }}>
            <Img src={`${BASE_URL}/assets/day-4/welcome-back-text.svg`} alt="Welcome back mate!" width="196" height="15" style={{ display: "inline-block", verticalAlign: "middle" }} />
            {" "}
            <Img src={`${BASE_URL}/assets/day-4/open-hands.svg`} alt="👐" width="20" height="20" style={{ display: "inline-block", verticalAlign: "middle" }} />
          </Section>

          {/* Intro / Public Key text — Figma 902:34536 x:62,y:220 */}
          <Img
            src={`${BASE_URL}/assets/day-4/intro-public-key-text.svg`}
            alt="Today's all about wallets... Public Key is part of Asymmetric Cryptography."
            style={{ position: "absolute", top: "220px", left: "62px", width: "484px", height: "1788px", maxWidth: "none" }}
          />

          {/* Infographic 01 — Figma 902:34542 x:132,y:1681,w:367,h:183.5 */}
          <Img
            src={`${BASE_URL}/assets/day-4/infographic-01.svg`}
            alt=""
            style={{ position: "absolute", top: "1681px", left: "132px", width: "367px", height: "183.5px", maxWidth: "none" }}
          />

          {/* RSA diagram — Figma 902:34541 x:159,y:1922,w:282,h:160.72 */}
          <Img
            src={`${BASE_URL}/assets/day-4/rsa-1.svg`}
            alt=""
            style={{ position: "absolute", top: "1922px", left: "159px", width: "282px", height: "160.72px", maxWidth: "none" }}
          />

          {/* Group 1828 (glow, center accent) — Figma 902:42541 x:513.32,y:2001.84,w:400.32,h:398.48 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1828.svg`}
            alt=""
            style={{
              position: "absolute",
              top: "2602px",
              left: "4.5px",
              width: "600px",
              height: "600px",
              maxWidth: "none",
              transform: "rotate(104.55deg)",
              zIndex: -1,
              pointerEvents: "none",
            }}
          />

          {/* Hot/Cold wallets text — Figma 902:34537 x:58,y:2102 */}
          <Img
            src={`${BASE_URL}/assets/day-4/hot-cold-wallets-text.svg`}
            alt="Based on how these keys are stored and accessed, Crypto Wallets are classified in two types: Hot Wallets and Cold Storage Wallets."
            style={{ position: "absolute", top: "2102px", left: "58px", width: "484px", height: "618px", maxWidth: "none" }}
          />

          {/* Group 1828 (glow) — Figma 902:42541 x:513.32,y:2001.84,w:400.32,h:398.48 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1828.svg`}
            alt=""
            style={{
              position: "absolute",
              top: "1556px",
              left: "-275px",
              width: "1150px",
              height: "629.7px",
              maxWidth: "none",
              transform: "rotate(80deg)",
              opacity: 1,
              zIndex: -1,
              pointerEvents: "none",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
            }}
          />

          {/* Infographic 02 — Figma 902:34543 x:168,y:2743,w:273,h:318.5 */}
          <Img
            src={`${BASE_URL}/assets/day-4/infographic-02.svg`}
            alt=""
            style={{ position: "absolute", top: "2743px", left: "168px", width: "273px", height: "318.5px", maxWidth: "none" }}
          />

          {/* Group 1828-1 (glow) — Figma 902:42544 x:523.4,y:3020.27,w:403.4,h:401.55 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1828-1.svg`}
            alt=""
            style={{
              position: "absolute",
              top: "1556px",
              left: "-275px",
              width: "1150px",
              height: "629.7px",
              maxWidth: "none",
              transform: "rotate(104.55deg)",
              opacity: 1,
              zIndex: -1,
              pointerEvents: "none",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
            }}
          />

          {/* Group 1828-1 (glow, center accent) — Figma 902:42544 x:523.4,y:3020.27,w:403.4,h:401.55 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1828-1.svg`}
            alt=""
            style={{
              position: "absolute",
              top: "2602px",
              left: "4.5px",
              width: "600px",
              height: "600px",
              maxWidth: "none",
              transform: "rotate(104.55deg)",
              zIndex: -1,
              pointerEvents: "none",
            }}
          />

          {/* Hardware/Paper wallets text — Figma 902:34538 x:59,y:3074 */}
          <Img
            src={`${BASE_URL}/assets/day-4/hardware-paper-wallets-text.svg`}
            alt="Based on the type of physical media used to store the keys, cold storage is classified into two: Hardware Wallets and Paper Wallets."
            style={{ position: "absolute", top: "3074px", left: "59px", width: "484px", height: "1503px", maxWidth: "none" }}
          />

          {/* Rectangle 18 — Figma 902:34589 x:165,y:4612,w:270,h:272 */}
          <Img
            src={`${BASE_URL}/assets/day-4/rectangle-18.svg`}
            alt=""
            style={{ position: "absolute", top: "4612px", left: "165px", width: "270px", height: "272px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Group 1829 (glow) — centered behind Rectangle 18 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1829.svg`}
            alt=""
            style={{ position: "absolute", top: "4423px", left: "-25px", width: "650px", height: "650px", maxWidth: "none", zIndex: -2, pointerEvents: "none" }}
          />

          {/* Bitcoin address / digital signatures text — Figma 902:34539 x:58,y:4900 */}
          <Img
            src={`${BASE_URL}/assets/day-4/bitcoin-address-text.svg`}
            alt="One-way cryptographic hashing is used to generate the Bitcoin Address from the public key."
            style={{ position: "absolute", top: "4900px", left: "58px", width: "482px", height: "1295px", maxWidth: "none" }}
          />

          {/* Group 3 (glow) — Figma 902:34594 x:407,y:5642,w:390,h:390 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-3.svg`}
            alt=""
            style={{ position: "absolute", top: "5542px", left: "195px", width: "430px", height: "580px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Rectangle 3 (bg) — Figma 902:34597 x:608,y:6216,w:616,h:745 */}
          <Img
            src={`${BASE_URL}/assets/day-4/rectangle-3.svg`}
            alt=""
            style={{ position: "absolute", top: "6216px", left: "-8px", width: "616px", height: "745px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Creating/Sending/Redeeming steps text — Figma 902:34540 x:58,y:6222 */}
          <Img
            src={`${BASE_URL}/assets/day-4/send-btc-steps-text.svg`}
            alt="Steps to create and use a Bitcoin Cold Storage Wallet."
            style={{ position: "absolute", top: "6222px", left: "58px", width: "483px", height: "1449px", maxWidth: "none" }}
          />

          {/* Group 4 (glow) — Figma 902:34604 x:-165,y:6396,w:330,h:330 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-4.svg`}
            alt=""
            style={{ position: "absolute", top: "6276px", left: "-50px", width: "420px", height: "520px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Group 5 (glow) — Figma 902:34607 x:415,y:6600,w:350,h:350 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-5.svg`}
            alt=""
            style={{ position: "absolute", top: "6520px", left: "230px", width: "430px", height: "530px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Clapping Hands — Figma 902:34598 x:112,y:6997,w:21,h:21 */}
          <Img
            src={`${BASE_URL}/assets/day-4/clapping-hands.svg`}
            alt="👏"
            style={{ position: "absolute", top: "6997px", left: "112px", width: "21px", height: "21px", maxWidth: "none" }}
          />

          {/* Group 1830 (glow) — Figma 987:68 x:-95,y:7060,w:252,h:252 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1830.svg`}
            alt=""
            style={{ position: "absolute", top: "7000px", left: "-60px", width: "370px", height: "370px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Group 1831 (glow) — Figma 987:71 x:507,y:7070,w:129,h:129 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1831.svg`}
            alt=""
            style={{ position: "absolute", top: "7030px", left: "430px", width: "200px", height: "200px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Rectangle 19 (bg) — Figma 902:34602 x:608,y:7086,w:616,h:226 */}
          <Img
            src={`${BASE_URL}/assets/day-4/rectangle-19.svg`}
            alt=""
            style={{ position: "absolute", top: "7086px", left: "-8px", width: "616px", height: "226px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Rectangle 20 (bg) — Figma 902:34603 x:608,y:7334,w:616,h:359 */}
          <Img
            src={`${BASE_URL}/assets/day-4/rectangle-20.svg`}
            alt=""
            style={{ position: "absolute", top: "7334px", left: "-8px", width: "616px", height: "359px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Group 1832 (glow) — Figma 987:74 x:478,y:7514,w:187,h:187 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1832.svg`}
            alt=""
            style={{ position: "absolute", top: "7454px", left: "370px", width: "290px", height: "290px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Footer background — Figma 902:34610 "Vector" x:-1,y:7803.94,w:599,h:263 */}
          <Img
            src={`${BASE_URL}/assets/day-4/vector.svg`}
            alt=""
            style={{ position: "absolute", top: "7803.94px", left: "0px", width: "600px", height: "148px", maxWidth: "none", transform: "rotate(0deg)", opacity: 1, zIndex: -1, pointerEvents: "none" }}
          />

          {/* Group (footer decorative grid) — Figma 902:34612 w:600,h:148 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group.svg`}
            alt=""
            style={{ position: "absolute", top: "7803.94px", left: "0px", width: "600px", height: "148px", maxWidth: "none", zIndex: 0, pointerEvents: "none" }}
          />

          {/* Ellipse 81 (glow) — Figma 902:34665 x:-80.76,y:7664,w:772.43,h:478.17 */}
          <Img
            src={`${BASE_URL}/assets/day-4/ellipse-81.svg`}
            alt=""
            style={{ position: "absolute", top: "7632px", left: "-80.76px", width: "772.43px", height: "478.17px", maxWidth: "none", zIndex: 1, pointerEvents: "none" }}
          />

          {/* Social media icons — Figma 902:34644 x:203,y:7816.94,w:193.3,h:25.3 */}
          <Img
            src={`${BASE_URL}/assets/day-4/social-media.svg`}
            alt="Follow us on social media"
            style={{ position: "absolute", top: "7816.94px", left: "203px", width: "193.3px", height: "25.3px", maxWidth: "none" }}
          />

          {/* Footer disclaimer text — Figma 902:34643 x:39,y:7867.94 */}
          <Img
            src={`${BASE_URL}/assets/day-4/footer-email-text.svg`}
            alt="This email was sent to hello@hey.com. You can update your email subscription preferences at any time."
            style={{ position: "absolute", top: "7867.94px", left: "84px", width: "432px", height: "33px", maxWidth: "none" }}
          />

          {/* Group 1826 (footer accent) — Figma 902:34660 x:216,y:7924.94,w:166,h:11 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1826.svg`}
            alt=""
            style={{ position: "absolute", top: "7924.94px", left: "216px", width: "166px", height: "11px", maxWidth: "none" }}
          />

          {/* Group 1827 (footer accent) — Figma 902:34667 x:239,y:7764.94,w:116,h:26 */}
          <Img
            src={`${BASE_URL}/assets/day-4/group-1827.svg`}
            alt=""
            style={{ position: "absolute", top: "7764.94px", left: "239px", width: "116px", height: "26px", maxWidth: "none" }}
          />
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
  height: "7950px",
  margin: "0 auto",
  opacity: 1,
};
