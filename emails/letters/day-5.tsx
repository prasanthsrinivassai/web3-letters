import { Html, Body, Container, Head, Preview, Img } from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";


export default function Day5Email() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>Eth 2.0, Layer 2's and its uses</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative", zIndex: 0, overflow: "hidden" }}>

          {/* Header glow */}
          <Img
            src={`${BASE_URL}/assets/day-5/group-1829.png`}
            width={478}
            height={378}
            alt=""
            style={{ position: "absolute", top: "-70px", left: "0px", width: "420px", height: "450px", opacity: 0.8, zIndex: -1 }}
          />
          {/* Header background */}
          <Img
            src={`${BASE_URL}/assets/day-5/rectangle-2.svg`}
            width={600}
            height={138}
            alt=""
            style={{ position: "absolute", top: "17px", left: "0px", width: "600px", height: "138px", opacity: 1, zIndex: -1 }}
          />
          {/* Title */}
          <Img
            src={`${BASE_URL}/assets/day-5/Eth-2.0.svg`}
            width={248}
            height={66}
            alt="Eth 2.0, layer 2's and its uses"
            style={{ position: "absolute", top: "45px", left: "56px", width: "248px", height: "66px", opacity: 1 }}
          />
          {/* Ethereum logo badge */}
          <Img
            src={`${BASE_URL}/assets/day-5/ethereum-5192306-4337878-1.png`}
            width={226}
            height={221}
            alt=""
            style={{ position: "absolute", top: "7px", left: "430px", width: "195.25px", height: "207.26px", opacity: 1 }}
          />

          {/* Welcome back mate! greeting */}
          <Img
            src={`${BASE_URL}/assets/day-5/welcome-back-mate!.svg`}
            width={196}
            height={15}
            alt="Welcome back mate!"
            style={{ position: "absolute", top: "176px", left: "58px", width: "196px", height: "15px", opacity: 1 }}
          />

          {/* So far mate! intro text */}
          <Img
            src={`${BASE_URL}/assets/day-5/So-far-mate!.svg`}
            width={461}
            height={693}
            alt=""
            style={{ position: "absolute", top: "208px", left: "58px", width: "461px", height: "693px", opacity: 1 }}
          />



          {/* rectangle-26 card */}
          <Img
            src={`${BASE_URL}/assets/day-5/rectangle-26.svg`}
            width={484}
            height={214}
            alt=""
            style={{ position: "absolute", top: "920px", left: "58px", width: "484px", height: "214px", opacity: 1 }}
          />

          {/* group-1834 glow */}
          <Img
            src={`${BASE_URL}/assets/day-5/group-1834.png`}
            width={487}
            height={875}
            alt=""
            style={{ position: "absolute", top: "1460px", left: "auto", right: "0px", width: "420px", height: "755px", opacity: 1, zIndex: -1 }}
          />
          {/* rectangle-3 section background */}
          <Img
            src={`${BASE_URL}/assets/day-5/rectangle-3.png`}
            width={600}
            height={716}
            alt=""
            style={{ position: "absolute", top: "1315px", left: "0px", width: "600px", height: "716px", opacity: 1, zIndex: -2 }}
          />
          {/* on-ethereum text block */}
          <Img
            src={`${BASE_URL}/assets/day-5/on-ethereum..svg`}
            width={477}
            height={855}
            alt=""
            style={{ position: "absolute", top: "1160px", left: "58px", width: "477px", height: "855px", opacity: 1 }}
          />

          {/* group-1828 glow */}
          <Img
            src={`${BASE_URL}/assets/day-5/group-1828.svg`}
            width={600}
            height={743}
            alt=""
            style={{ position: "absolute", top: "1933px", left: "0px", width: "600px", height: "743px", opacity: 1, zIndex: -1 }}
          />
          {/* rectangle-28 card */}
          <Img
            src={`${BASE_URL}/assets/day-5/rectangle-28.svg`}
            width={349}
            height={509}
            alt=""
            style={{ position: "absolute", top: "2050px", left: "126px", width: "349px", height: "509px", opacity: 1, borderRadius: "8px" }}
          />
          {/* group-1829 glow behind let-me-quickly */}
          <Img
            src={`${BASE_URL}/assets/day-5/group-1829.svg`}
            width={600}
            height={657}
            alt=""
            style={{ position: "absolute", top: "2640px", left: "0px", width: "600px", height: "657px", opacity: 1, zIndex: -1 }}
          />
          {/* let-me-quickly text block */}
          <Img
            src={`${BASE_URL}/assets/day-5/let-me-quickly.svg`}
            width={480}
            height={1125}
            alt=""
            style={{ position: "absolute", top: "2600px", left: "58px", width: "480px", height: "1125px", opacity: 1 }}
          />
          {/* smart-contracts card */}
          <Img
            src={`${BASE_URL}/assets/day-5/smart-contracts.svg`}
            width={331}
            height={186}
            alt=""
            style={{ position: "absolute", top: "2875px", left: "134.5px", width: "331px", height: "186px", opacity: 1, borderRadius: "8px" }}
          />

          {/* group1-1829 glow behind 1_tv4v0 image */}
          <Img
            src={`${BASE_URL}/assets/day-5/group1-1829.svg`}
            width={582}
            height={568}
            alt=""
            style={{ position: "absolute", top: "3141px", left: "9px", width: "582px", height: "568px", opacity: 1, zIndex: -1 }}
          />

          {/* group-1832 glow */}
          <Img
            src={`${BASE_URL}/assets/day-5/group-1832.svg`}
            width={600}
            height={635}
            alt=""
            style={{ position: "absolute", top: "4890px", left: "0px", width: "600px", height: "600px", opacity: 1, zIndex: -1 }}
          />

          {/* 1_FZJ6Jix image */}
          <Img
            src={`${BASE_URL}/assets/day-5/1_FZJ6Jix__snVQanNBce-_A-1.svg`}
            width={379}
            height={150}
            alt=""
            style={{ position: "absolute", top: "5017px", left: "111px", width: "378.41px", height: "149.31px", opacity: 1, borderRadius: "5.44px" }}
          />

          {/* rectangle-27 card */}
          <Img
            src={`${BASE_URL}/assets/day-5/rectangle-27.svg`}
            width={254}
            height={237}
            alt=""
            style={{ position: "absolute", top: "5179px", left: "174px", width: "254px", height: "237px", opacity: 1, borderRadius: "5px" }}
          />

          {/* each-shareholder text block */}
          <Img
            src={`${BASE_URL}/assets/day-5/each-shareholder.svg`}
            width={483}
            height={324}
            alt=""
            style={{ position: "absolute", top: "4663px", left: "58px", width: "485px", height: "336px", opacity: 1 }}
          />

          {/* group-1831 glow */}
          <Img
            src={`${BASE_URL}/assets/day-5/group-1831.svg`}
            width={600}
            height={635}
            alt=""
            style={{ position: "absolute", top: "4375px", left: "40px", width: "540px", height: "450px", opacity: 1, zIndex: -1 }}
          />

          {/* group-1835 glow behind vcKd */}
          <Img
            src={`${BASE_URL}/assets/day-5/group-1835.svg`}
            width={600}
            height={612}
            alt=""
            style={{ position: "absolute", top: "7352px", left: "0px", width: "600px", height: "612px", opacity: 1, zIndex: -1 }}
          />

          {/* vcKd infographic */}
          <Img
            src={`${BASE_URL}/assets/day-5/vcKd-1.svg`}
            width={300}
            height={185}
            alt=""
            style={{ position: "absolute", top: "7565px", left: "150px", width: "300px", height: "185px", opacity: 1, borderRadius: "5px" }}
          />

          {/* so-what's-scaling text block */}
          <Img
            src={`${BASE_URL}/assets/day-5/so-whats-scaling.svg`}
            width={482}
            height={2319}
            alt=""
            style={{ position: "absolute", top: "5431px", left: "58px", width: "485px", height: "2370px", opacity: 1 }}
          />

          {/* compare_M infographic */}
          <Img
            src={`${BASE_URL}/assets/day-5/compare_M-1.svg`}
            width={367}
            height={219}
            alt=""
            style={{ position: "absolute", top: "4420px", left: "117px", width: "367px", height: "218.26px", opacity: 1, borderRadius: "5px" }}
          />

          {/* the-ethereum text block */}
          <Img
            src={`${BASE_URL}/assets/day-5/the-ethereum.svg`}
            width={483}
            height={375}
            alt=""
            style={{ position: "absolute", top: "4013px", left: "58px", width: "485px", height: "384px", opacity: 1 }}
          />

          {/* group-1830 glow behind 1108962 */}
          <Img
            src={`${BASE_URL}/assets/day-5/group-1830.svg`}
            width={600}
            height={635}
            alt=""
            style={{ position: "absolute", top: "3568px", left: "0px", width: "600px", height: "635px", opacity: 1, zIndex: -1 }}
          />

          {/* 1108962 image */}
          <Img
            src={`${BASE_URL}/assets/day-5/1108962.svg`}
            width={302}
            height={226}
            alt=""
            style={{ position: "absolute", top: "3772px", left: "149px", width: "301.33px", height: "226px", opacity: 1, borderRadius: "5px" }}
          />

          {/* 1_tv4v0wrfVOAUmdBqgpwiMw-1 image */}
          <Img
            src={`${BASE_URL}/assets/day-5/1_tv4v0wrfVOAUmdBqgpwiMw-1.svg`}
            width={267}
            height={150}
            alt=""
            style={{ position: "absolute", top: "3350px", left: "167px", width: "266.11px", height: "149.69px", opacity: 1 }}
          />


          {/* ── Footer (same as Day 6) ── */}
          <Img src={`${BASE_URL}/assets/day-5/ellipse-82.svg`} alt="" style={{ position: "absolute", top: "7738px", left: "0px", width: "600px", height: "306px", maxWidth: "none", opacity: 1, zIndex: -2, pointerEvents: "none" }} />
          <Img src={`${BASE_URL}/assets/day-5/ellipse-83.svg`} alt="" style={{ position: "absolute", top: "7838px", left: "0px", width: "600px", height: "209px", maxWidth: "none", opacity: 1, zIndex: 0, pointerEvents: "none" }} />
          <Img src={`${BASE_URL}/assets/day-5/ellipse-81.svg`} alt="" style={{ position: "absolute", top: "7836px", left: "0px", width: "772.43px", height: "478.17px", maxWidth: "none", opacity: 1, zIndex: 0, pointerEvents: "none" }} />
          <Img src={`${BASE_URL}/assets/day-5/group.svg`} alt="" style={{ position: "absolute", top: "7902px", left: "0px", width: "600px", height: "148px", maxWidth: "none", zIndex: 0, pointerEvents: "none" }} />
          <Img src={`${BASE_URL}/assets/day-5/vector.svg`} alt="" style={{ position: "absolute", top: "7902px", left: "0px", width: "600px", height: "148px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }} />
          <Img src={`${BASE_URL}/assets/day-5/group-1827.svg`} alt="Enhance" style={{ position: "absolute", top: "7863px", left: "231px", width: "116px", height: "26px", maxWidth: "none", zIndex: 1 }} />
          <Img src={`${BASE_URL}/assets/day-5/social-media.svg`} alt="Follow us on social media" style={{ position: "absolute", top: "7915px", left: "195px", width: "193.3px", height: "25.3px", maxWidth: "none", zIndex: 1 }} />
          <Img src={`${BASE_URL}/assets/day-5/footer-email-text.svg`} alt="This email was sent to hello@hey.com. You can update your email subscription preferences at any time." style={{ position: "absolute", top: "7966px", left: "84px", width: "432px", height: "33px", maxWidth: "none", zIndex: 1 }} />
          <Img src={`${BASE_URL}/assets/day-5/group-1826.svg`} alt="Copyright 2020 Enhance 42" style={{ position: "absolute", top: "8023px", left: "209px", width: "166px", height: "11px", maxWidth: "none", zIndex: 1 }} />
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
  height: "8050px",
  margin: "0 auto",
  opacity: 1,
};
