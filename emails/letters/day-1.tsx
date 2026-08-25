import { Html, Body, Container, Head, Preview, Img, Link } from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Day1Email() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>History of Money &amp; Bitcoin Inception</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative", zIndex: 0, overflow: "hidden" }}>

          {/* Group 2 — header glow */}
          <Img
            src={`${BASE_URL}/assets/day-1/eclipse.svg`}
            width={449}
            height={322}
            alt=""
            style={{ position: "absolute", top: "-260px", left: "0px", width: "449px", height: "322px", opacity: 1, zIndex: -2 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/rectangle-29.svg`}
            width={357}
            height={380}
            alt=""
            style={{ position: "absolute", top: "-74px", left: "0px", width: "357px", height: "380px", opacity: 1, zIndex: -1 }}
          />

          {/* Group 1885 — header bg + title */}
          <Img
            src={`${BASE_URL}/assets/day-1/group-1885.png`}
            width={600}
            height={156}
            alt=""
            style={{ position: "absolute", top: "3px", left: "0px", width: "600px", height: "156px", opacity: 1, zIndex: -1 }}
          />

          {/* Group 1867 — "Namaste, Nawi!" greeting */}
          <Img
            src={`${BASE_URL}/assets/day-1/group-1867.svg`}
            width={489}
            height={26}
            alt="Namaste, Nawi!"
            style={{ position: "absolute", top: "177px", left: "57px", width: "489px", height: "26px", opacity: 1 }}
          />

          {/* Intro paragraph — "Hope you've started making money..." */}
          <Img
            src={`${BASE_URL}/assets/day-1/Hope-you've-started.svg`}
            width={480}
            height={447}
            alt=""
            style={{ position: "absolute", top: "220px", left: "57px", width: "480px", height: "447px", opacity: 1 }}
          />

          {/* "Money through the Ages" heading */}
          <Img
            src={`${BASE_URL}/assets/day-1/Money-through-the-Ages.svg`}
            width={233}
            height={19}
            alt="Money through the Ages"
            style={{ position: "absolute", top: "690px", left: "57px", width: "233px", height: "19px", opacity: 1 }}
          />

          {/* grid — timeline graphic */}
          <Img
            src={`${BASE_URL}/assets/day-1/grid.svg`}
            width={457}
            height={197}
            alt=""
            style={{ position: "absolute", top: "740px", left: "88px", width: "440px", height: "180px", opacity: 1 }}
          />

          {/* Barter system paragraph */}
          <Img
            src={`${BASE_URL}/assets/day-1/Barter-system.svg`}
            width={480}
            height={351}
            alt=""
            style={{ position: "absolute", top: "950px", left: "57px", width: "489px", height: "367px", opacity: 1 }}
          />

          <Img
            src={`${BASE_URL}/assets/day-1/group1.svg`}
            width={74}
            height={74}
            alt=""
            style={{ position: "absolute", top: "1120.12px", right: "-15px", width: "74px", height: "74px", opacity: 1 }}
          />

          {/* unnamed 1 — image */}
          <Img
            src={`${BASE_URL}/assets/day-1/unnamed-1.svg`}
            width={264}
            height={199}
            alt=""
            style={{ position: "absolute", top: "1317px", left: "177px", width: "246px", height: "181px", opacity: 1 }}
          />

          {/* Findings like the Babylonian tablets paragraph */}
          <Img
            src={`${BASE_URL}/assets/day-1/Findings-like-the.svg`}
            width={479}
            height={156}
            alt=""
            style={{ position: "absolute", top: "1508px", left: "57px", width: "485px", height: "156px", opacity: 1 }}
          />

          {/* unnamed 2 — image */}
          <Img
            src={`${BASE_URL}/assets/day-1/unnamed-2.svg`}
            width={307}
            height={184}
            alt=""
            style={{ position: "absolute", top: "1720px", left: "163px", width: "288px", height: "166px", opacity: 1 }}
          />

          {/* Group — small icon */}
          <Img
            src={`${BASE_URL}/assets/day-1/group2.svg`}
            width={76}
            height={69}
            alt=""
            style={{ position: "absolute", top: "1694.5px", left: "-15px", width: "76px", height: "69px", opacity: 1 }}
          />

          {/* "Well, the next in line were coins..." paragraph */}
          <Img
            src={`${BASE_URL}/assets/day-1/Well-the-next.svg`}
            width={487}
            height={303}
            alt=""
            style={{ position: "absolute", top: "1919px", left: "58px", width: "490px", height: "321px", opacity: 1 }}
          />

          {/* "The next milestone, the Bretton Woods..." paragraph (incl. So, What went Wrong?) */}
          <Img
            src={`${BASE_URL}/assets/day-1/The-next-milestone.svg`}
            width={477}
            height={786}
            alt=""
            style={{ position: "absolute", top: "2250px", left: "58px", width: "482px", height: "799px", opacity: 1 }}
          />

          {/* Group 3 — glow */}
          <Img
            src={`${BASE_URL}/assets/day-1/Eclipse1.svg`}
            width={239}
            height={649}
            alt=""
            style={{ position: "absolute", top: "2620px", left: "auto", right: "0px", width: "180px", height: "489px", opacity: 1, zIndex: -1 }}
          />

          {/* govt 1 — image */}
          <Img
            src={`${BASE_URL}/assets/day-1/govt-1.svg`}
            width={161}
            height={220}
            alt=""
            style={{ position: "absolute", top: "3067px", left: "226px", width: "161px", height: "220px", opacity: 1 }}
          />

          {/* "The Birth of Crypto" heading + Times quote */}
          <Img
            src={`${BASE_URL}/assets/day-1/The-Birth-of-Crypto.svg`}
            width={473}
            height={114}
            alt=""
            style={{ position: "absolute", top: "3313px", left: "58px", width: "485px", height: "116px", opacity: 1 }}
          />

          {/* unnamed (1) 1 — Times newspaper image */}
          <Img
            src={`${BASE_URL}/assets/day-1/unnamed-(1)1.svg`}
            width={349}
            height={175}
            alt=""
            style={{ position: "absolute", top: "3468px", left: "128px", width: "349px", height: "175px", opacity: 1 }}
          />

          {/* Group 1798 — glow */}
          <Img
            src={`${BASE_URL}/assets/day-1/Eclipse2.svg`}
            width={213}
            height={542}
            alt=""
            style={{ position: "absolute", top: "3481px", left: "0px", width: "213px", height: "542px", opacity: 1, zIndex: -1 }}
          />

          {/* "After the 2008 global financial crisis... Satoshi Nakamoto..." paragraph */}
          <Img
            src={`${BASE_URL}/assets/day-1/group-known-as_Satoshi Nakamoto_.svg`}
            width={474}
            height={300}
            alt=""
            style={{ position: "absolute", top: "3668px", left: "60px", width: "483px", height: "324px", opacity: 1 }}
          />

          {/* unnamed (2) 2 — image */}
          <Img
            src={`${BASE_URL}/assets/day-1/unnamed-(2)2.svg`}
            width={287}
            height={179}
            alt=""
            style={{ position: "absolute", top: "4005px", left: "52px", width: "286px", height: "179px", opacity: 1 }}
          />

          <Img
            src={`${BASE_URL}/assets/day-1/group3.svg`}
            width={69}
            height={64}
            alt=""
            style={{ position: "absolute", top: "5370px", right: "-25px", width: "69px", height: "64px", opacity: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/group4.svg`}
            width={69}
            height={64}
            alt=""
            style={{ position: "absolute", top: "5650px", left: "-20px", width: "69px", height: "64px", opacity: 1 }}
          />

          {/* Group 3 — glow */}
          <Img
            src={`${BASE_URL}/assets/day-1/Eclipse3.svg`}
            width={293}
            height={649}
            alt=""
            style={{ position: "absolute", top: "3950px", left: "0px", width: "293px", height: "649px", opacity: 1, zIndex: -1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/rectangle1-29.svg`}
            width={192}
            height={525}
            alt=""
            style={{ position: "absolute", top: "3950px", left: "0px", width: "293px", height: "649px", opacity: 1, zIndex: -1 }}
          />

          {/* unnamed (3) 1 — image */}
          <Img
            src={`${BASE_URL}/assets/day-1/unnamed-(3)1.svg`}
            width={192}
            height={122}
            alt=""
            style={{ position: "absolute", top: "4034px", left: "366px", width: "192px", height: "122px", opacity: 1 }}
          />

          {/* "And thus, in 2009, arrived the first ever..." paragraph */}
          <Img
            src={`${BASE_URL}/assets/day-1/And-thus-in-2009.svg`}
            width={483}
            height={519}
            alt=""
            style={{ position: "absolute", top: "4207px", left: "57px", width: "487px", height: "526px", opacity: 1 }}
          />

          {/* unnamed (1) 2 — image (Debunking myth) */}
          <Img
            src={`${BASE_URL}/assets/day-1/unnamed-(1)2.svg`}
            width={264}
            height={144}
            alt=""
            style={{ position: "absolute", top: "4308px", left: "169px", width: "264px", height: "144px", opacity: 1 }}
          />

          {/* rectangle-3 section background */}
          <Img
            src={`${BASE_URL}/assets/day-1/rectangle-3.svg`}
            width={600}
            height={536}
            alt=""
            style={{ position: "absolute", top: "4751px", left: "0px", width: "600px", height: "536px", opacity: 1, zIndex: -1 }}
          />

          {/* Group 1871 — glow */}
          <Img
            src={`${BASE_URL}/assets/day-1/group-1871.svg`}
            width={486}
            height={515}
            alt=""
            style={{ position: "absolute", top: "4751px", left: "-7px", width: "616px", height: "536px", opacity: 1, zIndex: -1 }}
          />

          {/* Eclipse4 glow */}
          <Img
            src={`${BASE_URL}/assets/day-1/Eclipse4.svg`}
            width={248}
            height={542}
            alt=""
            style={{ position: "absolute", top: "4815.75px", left: "auto", right: "0px", width: "248px", height: "542px", opacity: 1, zIndex: -2 }}
          />

          {/* rectangle2-29 */}
          <Img
            src={`${BASE_URL}/assets/day-1/rectangle2-29.svg`}
            width={142}
            height={365}
            alt=""
            style={{ position: "absolute", top: "4936.61px", left: "auto", right: "0px", width: "142px", height: "365px", opacity: 1, zIndex: -1 }}
          />

          {/* "Types of Cryptocurrencies" paragraph */}
          <Img
            src={`${BASE_URL}/assets/day-1/Types-of-Cryptocurrencies.svg`}
            width={484}
            height={907}
            alt=""
            style={{ position: "absolute", top: "5305px", left: "57px", width: "486px", height: "929px", opacity: 1 }}
          />

          {/* D&G — large background image */}
          <Img
            src={`${BASE_URL}/assets/day-1/Dots-grid1.svg`}
            width={600}
            height={654}
            alt=""
            style={{ position: "absolute", top: "5863px", left: "0px", width: "600px", height: "653px", opacity: 1, zIndex: -1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/Dots-grid2.svg`}
            width={600}
            height={654}
            alt=""
            style={{ position: "absolute", top: "6517px", left: "0px", width: "600px", height: "653px", opacity: 1, zIndex: -1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/Dots-grid3.svg`}
            width={600}
            height={654}
            alt=""
            style={{ position: "absolute", top: "7170px", left: "0px", width: "600px", height: "653px", opacity: 1, zIndex: -1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/Dots-grid4.svg`}
            width={600}
            height={654}
            alt=""
            style={{ position: "absolute", top: "7813px", left: "0px", width: "600px", height: "653px", opacity: 1, zIndex: -1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/Dots-grid5.svg`}
            width={600}
            height={654}
            alt=""
            style={{ position: "absolute", top: "7983px", left: "0px", width: "600px", height: "653px", opacity: 1, zIndex: -1 }}
          />

          {/* Rectangle 61 — card */}
          <Img
            src={`${BASE_URL}/assets/day-1/rectangle-61.svg`}
            width={216}
            height={214}
            alt=""
            style={{ position: "absolute", top: "6255px", left: "194px", width: "216px", height: "214px", opacity: 1 }}
          />

          {/* "Tokens are digital representation..." paragraph */}
          <Img
            src={`${BASE_URL}/assets/day-1/Tokens-are-digital.svg`}
            width={479}
            height={975}
            alt=""
            style={{ position: "absolute", top: "6501px", left: "61px", width: "482px", height: "999px", opacity: 1 }}
          />

          {/* Different-Token-Types-Chart 1 — infographic */}
          <Img
            src={`${BASE_URL}/assets/day-1/Different-Token-Types-Chart-1.svg`}
            width={434}
            height={291}
            alt=""
            style={{ position: "absolute", top: "7517px", left: "83px", width: "433px", height: "291px", opacity: 1 }}
          />

          {/* Closing paragraph */}
          <Img
            src={`${BASE_URL}/assets/day-1/Thats-pretty.svg`}
            width={465}
            height={111}
            alt=""
            style={{ position: "absolute", top: "7840px", left: "58px", width: "483px", height: "132px", opacity: 1 }}
          />
          {/* Clickable overlay for "guide to cryptocurrencies" within Thats-pretty.svg */}
          <Link
            href="https://coinmarketcap.com/alexandria/article/what-is-cryptocurrency"
            style={{ position: "absolute", top: "7868px", left: "232px", width: "192px", height: "18px", display: "block", zIndex: 2 }}
          />

          {/* Smiling Face with Sunglasses emoji */}
          <Img
            src={`${BASE_URL}/assets/day-1/Smiling-Face-with-Sunglasses.svg`}
            width={17}
            height={17}
            alt="😎"
            style={{ position: "absolute", top: "7946px", left: "320px", width: "17px", height: "17px", opacity: 1 }}
          />

          {/* Rectangle 78 — CTA section background */}
          <Img
            src={`${BASE_URL}/assets/day-1/rectangle-78.svg`}
            width={600}
            height={514}
            alt=""
            style={{ position: "absolute", top: "7983px", left: "-1px", width: "608px", height: "514px", opacity: 1, zIndex: -1 }}
          />

          {/* MetaMask_Fox 1 — logo */}
          <Img
            src={`${BASE_URL}/assets/day-1/MetaMask_Fox-1.svg`}
            width={129}
            height={129}
            alt="MetaMask"
            style={{ position: "absolute", top: "8169px", left: "33px", width: "129px", height: "129px", opacity: 1 }}
          />

          {/* Let's get those hands dirty now heading */}
          <Img
            src={`${BASE_URL}/assets/day-1/Lets-get-those-hands-dirty-now.svg`}
            width={301}
            height={19}
            alt="Let's get those hands dirty now"
            style={{ position: "absolute", top: "7996px", left: "180px", width: "301px", height: "19px", opacity: 1 }}
          />

          {/* Now that you are acquainted text block */}
          <Img
            src={`${BASE_URL}/assets/day-1/Now-that-you-are-acquainted.svg`}
            width={386}
            height={420}
            alt=""
            style={{ position: "absolute", top: "8048.73px", left: "165px", width: "386px", height: "420px", opacity: 1 }}
          />

          {/* ── Footer ── */}
          <Img
            src={`${BASE_URL}/assets/day-1/group-1801.svg`}
            width={600}
            height={388}
            alt=""
            style={{ position: "absolute", top: "8385px", right: "0px", width: "600px", height: "388px", zIndex: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/vector.svg`}
            width={599}
            height={124}
            alt=""
            style={{ position: "absolute", top: "8649px", left: "1px", width: "599px", height: "124px" }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/group.svg`}
            width={600}
            height={297}
            alt=""
            style={{ position: "absolute", top: "8447px", left: "0px", width: "600px", height: "297px", zIndex: 0 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/social-media.svg`}
            width={194}
            height={78}
            alt="Follow us on social media"
            style={{ position: "absolute", top: "8608px", left: "202px", width: "194px", height: "78px", zIndex: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/This-email.svg`}
            width={520}
            height={49}
            alt=""
            style={{ position: "absolute", top: "8703px", left: "39px", width: "520px", height: "49px", zIndex: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-1/group-1814.svg`}
            width={166}
            height={11}
            alt="Copyright"
            style={{ position: "absolute", top: "8756px", left: "216px", width: "166px", height: "11px", zIndex: 1 }}
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
  height: "8773px",
  margin: "0 auto",
  opacity: 1,
};
