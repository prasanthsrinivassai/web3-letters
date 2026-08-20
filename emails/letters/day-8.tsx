import { Html, Body, Container, Head, Preview, Img } from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Day8Email() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>Beyond Bitcoin: IEOs, IEDs, IDO, DAOs, NFT &amp; Metaverse</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative", zIndex: 0, overflow: "hidden" }}>
          {/* Header glow */}
          <Img
            src={`${BASE_URL}/assets/day-8/group-1844.png`}
            width={600}
            height={419}
            alt=""
            style={{ position: "absolute", top: "-40px", left: "auto", right: "-80px", width: "600px", height: "419px", opacity: 1, zIndex: -1 }}
          />
          {/* Header background */}
          <Img
            src={`${BASE_URL}/assets/day-8/rectangle-2.svg`}
            width={600}
            height={138}
            alt=""
            style={{ position: "absolute", top: "17px", left: "0px", width: "600px", height: "138px", opacity: 1, zIndex: -1 }}
          />
          {/* Title */}
          <Img
            src={`${BASE_URL}/assets/day-8/Beyond_Bitcoin_ ICO, IEO, IDO DAOs _ NFT _ Metaverse.svg`}
            width={281}
            height={96}
            alt="Beyond Bitcoin: ICO, IEO, IDO DAOs | NFT | Metaverse"
            style={{ position: "absolute", top: "38px", left: "56px", width: "281px", height: "96px", opacity: 1 }}
          />
          {/* group-1858 glow — behind rectangle-52 + welcome section */}
          <Img
            src={`${BASE_URL}/assets/day-8/group-1858.svg`}
            width={600}
            height={755}
            alt=""
            style={{ position: "absolute", top: "300px", left: "0px", width: "600px", height: "755px", opacity: 1, zIndex: -1 }}
          />
          {/* Welcome back greeting */}
          <Img
            src={`${BASE_URL}/assets/day-8/welcome-back.svg`}
            width={479}
            height={354}
            alt=""
            style={{ position: "absolute", top: "176px", left: "58px", width: "479px", height: "354px", opacity: 1 }}
          />
          {/* Raised hand emoji */}
          <Img
            src={`${BASE_URL}/assets/day-8/raised-hand.png`}
            width={21}
            height={21}
            alt=""
            style={{ position: "absolute", top: "245px", left: "267px", width: "21px", height: "21px", opacity: 1 }}
          />
          {/* rectangle-52 card */}
          <Img
            src={`${BASE_URL}/assets/day-8/rectangle-52.svg`}
            width={486}
            height={161}
            alt=""
            style={{ position: "absolute", top: "553px", left: "57px", width: "486px", height: "161px", opacity: 1 }}
          />
          {/* group-1859 glow — behind let-me-quickly section */}
          <Img
            src={`${BASE_URL}/assets/day-8/group-1859.svg`}
            width={477}
            height={755}
            alt=""
            style={{ position: "absolute", top: "1458px", left: "300px", width: "354px", height: "405px", opacity: 1, zIndex: -1, transform: "rotate(104.55deg)" }}
          />
          {/* let-me-quickly text block */}
          <Img
            src={`${BASE_URL}/assets/day-8/let-me-quickly.svg`}
            width={482}
            height={789}
            alt=""
            style={{ position: "absolute", top: "741px", left: "58px", width: "482px", height: "789px", opacity: 1 }}
          />
          {/* rectangle-56 card */}
          <Img
            src={`${BASE_URL}/assets/day-8/rectangle-56.svg`}
            width={280}
            height={302}
            alt=""
            style={{ position: "absolute", top: "1575px", left: "160px", width: "279px", height: "302px", opacity: 1, borderRadius: "7.06px" }}
          />
          {/* group-1860 glow — behind these-are section */}
          <Img
            src={`${BASE_URL}/assets/day-8/group-1860.svg`}
            width={523}
            height={755}
            alt=""
            style={{ position: "absolute", top: "2115px", left: "0px", width: "420px", height: "480px", opacity: 1, zIndex: -1 }}
          />
          {/* group-1861 glow */}
          <Img
            src={`${BASE_URL}/assets/day-8/group-1861.svg`}
            width={409}
            height={755}
            alt=""
            style={{ position: "absolute", top: "2737px", left: "auto", right: "0px", width: "420px", height: "480px", opacity: 1, zIndex: -1 }}
          />
          {/* these-are large text block */}
          <Img
            src={`${BASE_URL}/assets/day-8/these-are.svg`}
            width={484}
            height={1120}
            alt=""
            style={{ position: "absolute", top: "1917px", left: "58px", width: "484px", height: "1120px", opacity: 1 }}
          />
          {/* rectangle-81 section background */}
          <Img
            src={`${BASE_URL}/assets/day-8/rectangle-81.svg`}
            width={600}
            height={409}
            alt=""
            style={{ position: "absolute", top: "3259px", left: "0px", width: "600px", height: "409px", opacity: 1, zIndex: -1 }}
          />
          {/* rectangle-53 card over IDO background */}
          <Img
            src={`${BASE_URL}/assets/day-8/rectangle-53.svg`}
            width={489}
            height={361}
            alt=""
            style={{ position: "absolute", top: "3813px", left: "55px", width: "489px", height: "361px", opacity: 1, borderRadius: "5px" }}
          />
          {/* IDO infographic image */}
          <Img
            src={`${BASE_URL}/assets/day-8/EfcLDDAkyqgrWe7KyyRHnJEfDrB3t7mryHMnZjJqPcMqJRzu7AYbj4dcJTrq9X6DKoLJFwsunoQc1sErzkbSfxhXjBYez-1.svg`}
            width={471}
            height={272}
            alt=""
            style={{ position: "absolute", top: "4187px", left: "64px", width: "470px", height: "272px", opacity: 1, borderRadius: "5px" }}
          />
          {/* DAO callout banner — sits behind the baked-in text in virtual-ecosystem.svg */}
          <div
            style={{
              position: "absolute",
              top: "5085px",
              left: "0px",
              width: "600px",
              height: "160px",
              backgroundColor: "#26262a",
              borderRadius: "8px",
              zIndex: -1,
            }}
          />
          {/* group-1864 glow */}
          <Img
            src={`${BASE_URL}/assets/day-8/group-1864.svg`}
            width={354}
            height={405}
            alt=""
            style={{ position: "absolute", top: "5400px", left: "0px", width: "510px", height: "580px", opacity: 1, zIndex: -1 }}
          />
          {/* group-1865 glow */}
          <Img
            src={`${BASE_URL}/assets/day-8/group-1865.svg`}
            width={354}
            height={405}
            alt=""
            style={{ position: "absolute", top: "6250px", left: "auto", right: "-70px", width: "470px", height: "535px", opacity: 1, zIndex: -1 }}
          />
          {/* rectangle-80 */}
          <Img
            src={`${BASE_URL}/assets/day-8/rectangle-80.png`}
            width={267}
            height={616}
            alt=""
            style={{ position: "absolute", top: "6972px", left: "0px", width: "600px", height: "260px", opacity: 1, zIndex: -1 }}
          />
          {/* Waving hand emoji — beside "Bye!" */}
          <Img
            src={`${BASE_URL}/assets/day-8/Waving-Hand.png`}
            width={30}
            height={30}
            alt=""
            style={{ position: "absolute", top: "8102px", left: "95px", width: "30px", height: "30px", opacity: 1 }}
          />
          {/* Virtual ecosystem large text block */}
          <Img
            src={`${BASE_URL}/assets/day-8/virtual-ecosystem.svg`}
            width={484}
            height={3646}
            alt=""
            style={{ position: "absolute", top: "4480px", left: "58px", width: "484px", height: "3646px", opacity: 1 }}
          />
          {/* Initial DEX Offering text block */}
          <Img
            src={`${BASE_URL}/assets/day-8/Initial-DEX.svg`}
            width={488}
            height={724}
            alt=""
            style={{ position: "absolute", top: "3060px", left: "58px", width: "488px", height: "724px", opacity: 1 }}
          />

          {/* ── Footer ── */}
          <Img
            src={`${BASE_URL}/assets/day-8/ellipse-85.svg`}
            width={600}
            height={308}
            alt=""
            style={{ position: "absolute", top: "8108px", left: "0px", width: "600px", height: "308px", opacity: 1, zIndex: -2 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-8/ellipse-86.svg`}
            width={600}
            height={211}
            alt=""
            style={{ position: "absolute", top: "8209px", left: "0px", width: "600px", height: "211px", opacity: 1, zIndex: 0 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-8/vector.svg`}
            width={600}
            height={148}
            alt=""
            style={{ position: "absolute", top: "8272px", left: "0px", width: "600px", height: "148px", zIndex: -1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-8/group.svg`}
            width={600}
            height={148}
            alt=""
            style={{ position: "absolute", top: "8271px", left: "0px", width: "600px", height: "148px", zIndex: 0 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-8/group-1827.svg`}
            width={116}
            height={26}
            alt="Enhance"
            style={{ position: "absolute", top: "8233px", left: "232px", width: "116px", height: "26px", zIndex: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-8/social-media.svg`}
            width={193}
            height={25}
            alt="Follow us on social media"
            style={{ position: "absolute", top: "8285px", left: "196px", width: "193.3px", height: "25.3px", zIndex: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-8/footer-email-text.svg`}
            width={432}
            height={33}
            alt="This email was sent to hello@hey.com. You can update your email subscription preferences at any time."
            style={{ position: "absolute", top: "8336px", left: "84px", width: "432px", height: "33px", zIndex: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-8/group-1826.svg`}
            width={166}
            height={11}
            alt="Copyright 2020 Enhance 42"
            style={{ position: "absolute", top: "8393px", left: "209px", width: "166px", height: "11px", zIndex: 1 }}
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
  backgroundColor: "#0F0F12",
  width: "600px",
  height: "8422px",
  margin: "0 auto",
  opacity: 1,
};
