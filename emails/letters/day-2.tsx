import { Html, Body, Container, Head, Preview, Img, Link } from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Day2Email() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>Bitcoin | Blockchain Web 3.0</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative", zIndex: 0, overflow: "hidden" }}>

          {/* Header glow */}
          <Img
            src={`${BASE_URL}/assets/day-2/group-1886.svg`}
            width={600}
            height={299}
            alt=""
            style={{ position: "absolute", top: "0px", left: "0px", width: "600px", height: "299px", opacity: 1, zIndex: -1 }}
          />

          {/* Group2 title */}
          <Img
            src={`${BASE_URL}/assets/day-2/Group2.svg`}
            width={295}
            height={148}
            alt=""
            style={{ position: "absolute", top: "0px", left: "79px", width: "295px", height: "148px", opacity: 1 }}
          />

          {/* Group3 */}
          <Img
            src={`${BASE_URL}/assets/day-2/Group3.svg`}
            width={57}
            height={187}
            alt=""
            style={{ position: "absolute", top: "0px", left: "auto", right: "0px", width: "57px", height: "187px", opacity: 0.75 }}
          />

          {/* group-1884 */}
          <Img
            src={`${BASE_URL}/assets/day-2/group-1884.svg`}
            width={181}
            height={241}
            alt=""
            style={{ position: "absolute", top: "0px", left: "auto", right: "0px", width: "181px", height: "241px", opacity: 0.7 }}
          />

          {/* Hello there again, Name! greeting */}
          <Img
            src={`${BASE_URL}/assets/day-2/Hello-there-again,-Name!.svg`}
            width={235}
            height={19}
            alt="Hello there again, Name!"
            style={{ position: "absolute", top: "183px", left: "5px", width: "489px", height: "26px", opacity: 1 }}
          />

          {/* Waving hand */}
          <Img
            src={`${BASE_URL}/assets/day-2/waving-hand.svg`}
            width={24}
            height={24}
            alt=""
            style={{ position: "absolute", top: "181px", left: "59px", width: "24px", height: "24px", opacity: 1 }}
          />

          {/* Ho! Ho! Ho! Santa text block */}
          <Img
            src={`${BASE_URL}/assets/day-2/Ho!-Ho!-Ho!-Santa.svg`}
            width={489}
            height={671}
            alt=""
            style={{ position: "absolute", top: "220px", left: "60px", width: "489px", height: "671px", opacity: 1 }}
          />

          {/* On a Bitcoin heading */}
          <Img
            src={`${BASE_URL}/assets/day-2/On-a-Bitcoin.svg`}
            width={463}
            height={81}
            alt=""
            style={{ position: "absolute", top: "918px", left: "63px", width: "463px", height: "81px", opacity: 1 }}
          />

          {/* rectangle-14 card */}
          <Img
            src={`${BASE_URL}/assets/day-2/rectangle-14.svg`}
            width={212}
            height={260}
            alt=""
            style={{ position: "absolute", top: "1052px", left: "199px", width: "212px", height: "260px", opacity: 1, borderRadius: "5px" }}
          />

          {/* Bitcoin was created text block */}
          <Img
            src={`${BASE_URL}/assets/day-2/Bitcoin-was-created.svg`}
            width={481}
            height={309}
            alt=""
            style={{ position: "absolute", top: "1347px", left: "63px", width: "481px", height: "309px", opacity: 1 }}
          />

          {/* rectangle-16 card */}
          <Img
            src={`${BASE_URL}/assets/day-2/rectangle-16.svg`}
            width={348}
            height={265}
            alt=""
            style={{ position: "absolute", top: "1692px", left: "135px", width: "348px", height: "265px", opacity: 1, borderRadius: "5px" }}
          />

          {/* Online payments text block */}
          <Img
            src={`${BASE_URL}/assets/day-2/Online-payments.svg`}
            width={485}
            height={1758}
            alt=""
            style={{ position: "absolute", top: "1989px", left: "64px", width: "485px", height: "1758px", opacity: 1 }}
          />

          {/* ezgif-4 image */}
          <Img
            src={`${BASE_URL}/assets/day-2/ezgif-4.svg`}
            width={149}
            height={195}
            alt=""
            style={{ position: "absolute", top: "2647px", left: "231px", width: "149px", height: "195px", opacity: 1, borderRadius: "5px" }}
          />

          {/* group-3 glow */}
          <Img
            src={`${BASE_URL}/assets/day-2/group-3.svg`}
            width={365}
            height={653}
            alt=""
            style={{ position: "absolute", top: "3500px", left: "0px", width: "365px", height: "653px", opacity: 1, zIndex: -1 }}
          />

          {/* unnamed-2 image */}
          <Img
            src={`${BASE_URL}/assets/day-2/unnamed-2.svg`}
            width={218}
            height={169}
            alt=""
            style={{ position: "absolute", top: "3775px", left: "196px", width: "218px", height: "169px", opacity: 1, borderRadius: "5px" }}
          />

          {/* Well let me text block */}
          <Img
            src={`${BASE_URL}/assets/day-2/Well-let-me.svg`}
            width={476}
            height={639}
            alt=""
            style={{ position: "absolute", top: "3962px", left: "63px", width: "476px", height: "639px", opacity: 1 }}
          />

          {/* unnamed-1 image */}
          <Img
            src={`${BASE_URL}/assets/day-2/unnamed-1.svg`}
            width={293}
            height={282}
            alt=""
            style={{ position: "absolute", top: "4640px", left: "159px", width: "293px", height: "282px", opacity: 1, borderRadius: "5px" }}
          />

          {/* A coin unifying text block */}
          <Img
            src={`${BASE_URL}/assets/day-2/A-coin-unifying.svg`}
            width={500}
            height={525}
            alt=""
            style={{ position: "absolute", top: "4948px", left: "51px", width: "500px", height: "525px", opacity: 1 }}
          />

          {/* rectangle-3 section background */}
          <Img
            src={`${BASE_URL}/assets/day-2/rectangle-3.svg`}
            width={600}
            height={358}
            alt=""
            style={{ position: "absolute", top: "5130px", left: "-4px", width: "600px", height: "358px", opacity: 1, borderRadius: "10px", zIndex: -1 }}
          />

          {/* unnamed-3 image */}
          <Img
            src={`${BASE_URL}/assets/day-2/unnamed-3.svg`}
            width={259}
            height={153}
            alt=""
            style={{ position: "absolute", top: "5527px", left: "171px", width: "259px", height: "153px", opacity: 1, borderRadius: "5px" }}
          />

          {/* Having said text block */}
          <Img
            src={`${BASE_URL}/assets/day-2/Having-said.svg`}
            width={484}
            height={684}
            alt=""
            style={{ position: "absolute", top: "5700px", left: "63px", width: "484px", height: "684px", opacity: 1 }}
          />

          {/* Proof of Work text block */}
          <Img
            src={`${BASE_URL}/assets/day-2/Proof-of-Work.svg`}
            width={478}
            height={468}
            alt=""
            style={{ position: "absolute", top: "6405px", left: "63px", width: "478px", height: "468px", opacity: 1 }}
          />

          {/* TransactionsBlockchainV2 image */}
          <Img
            src={`${BASE_URL}/assets/day-2/TransactionsBlockchainV2-1.svg`}
            width={388}
            height={243}
            alt=""
            style={{ position: "absolute", top: "6900px", left: "109px", width: "388px", height: "243px", opacity: 1, borderRadius: "5px" }}
          />

          {/* Calculating the text block */}
          <Img
            src={`${BASE_URL}/assets/day-2/Calculating-the.svg`}
            width={475}
            height={693}
            alt=""
            style={{ position: "absolute", top: "7160px", left: "64px", width: "475px", height: "693px", opacity: 1 }}
          />

          {/* rectangle-10 card */}
          <Img
            src={`${BASE_URL}/assets/day-2/rectangle-10.svg`}
            width={482}
            height={276}
            alt=""
            style={{ position: "absolute", top: "7879px", left: "62px", width: "482px", height: "276px", opacity: 1, borderRadius: "4.81px" }}
          />

          {/* The Lindy Effect text block */}
          <Img
            src={`${BASE_URL}/assets/day-2/The-Lindy-Effect.svg`}
            width={483}
            height={375}
            alt=""
            style={{ position: "absolute", top: "8179px", left: "62px", width: "483px", height: "375px", opacity: 1 }}
          />

          {/* D&G image */}
          <Img
            src={`${BASE_URL}/assets/day-2/D&G.svg`}
            width={596}
            height={3226}
            alt=""
            style={{
              position: "absolute",
              top: "6043px",
              left: "5px",
              width: "596px",
              height: "3226px",
              opacity: 1,
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 79.5%, transparent 79.5%, transparent 92.3%, black 92.3%, black 95.3%, transparent 95.3%)",
              maskImage: "linear-gradient(to bottom, black 0%, black 79.5%, transparent 79.5%, transparent 92.3%, black 92.3%, black 95.3%, transparent 95.3%)",
            }}
          />

          {/* As you fathom text block — image */}
          <Img
            src={`${BASE_URL}/assets/day-2/As-you-fathom.svg`}
            width={483}
            height={326}
            alt=""
            style={{ position: "absolute", top: "8674px", left: "45px", width: "483px", height: "326px", opacity: 1 }}
          />
          {/* Clickable overlay for the intro paragraph */}
          <Link href="https://coinmarketcap.com/view/play-to-earn/" style={{ position: "absolute", top: "8674px", left: "45px", width: "483px", height: "120px", display: "block", zIndex: 2 }} />
          {/* Clickable overlays for each play-to-earn game name and the closing link,
              positioned over their baked-in text inside As-you-fathom.svg */}
          <Link href="https://godsunchained.com" style={{ position: "absolute", top: "8794px", left: "45px", width: "200px", height: "24px", display: "block", zIndex: 2 }} />
          <Link href="https://axieinfinity.com" style={{ position: "absolute", top: "8822px", left: "45px", width: "200px", height: "24px", display: "block", zIndex: 2 }} />
          <Link href="https://plantvsundead.com" style={{ position: "absolute", top: "8850px", left: "45px", width: "200px", height: "24px", display: "block", zIndex: 2 }} />
          <Link href="https://gala.games" style={{ position: "absolute", top: "8878px", left: "45px", width: "230px", height: "24px", display: "block", zIndex: 2 }} />
          <Link href="https://illuvium.io" style={{ position: "absolute", top: "8906px", left: "45px", width: "200px", height: "24px", display: "block", zIndex: 2 }} />
          <Link href="https://coinmarketcap.com/view/play-to-earn/" style={{ position: "absolute", top: "8977px", left: "45px", width: "180px", height: "24px", display: "block", zIndex: 2 }} />

          {/* It's time to Earn through Fun heading */}
          <Img
            src={`${BASE_URL}/assets/day-2/Its-time-to-Earn-through-Fun.svg`}
            width={272}
            height={19}
            alt="It's time to Earn through Fun"
            style={{ position: "absolute", top: "8627px", left: "63px", width: "272px", height: "19px", opacity: 1 }}
          />

          {/* rectangle-103 section background */}
          <Img
            src={`${BASE_URL}/assets/day-2/rectangle-103.svg`}
            width={600}
            height={415}
            alt=""
            style={{ position: "absolute", top: "8607px", left: "0px", width: "600px", height: "415px", opacity: 1, zIndex: -1 }}
          />

          {/* ellipse-77 footer glow */}
          <Img
            src={`${BASE_URL}/assets/day-2/ellipse-77.svg`}
            width={600}
            height={329}
            alt=""
            style={{ position: "absolute", top: "8950px", left: "0px", width: "600px", height: "329px", opacity: 1, borderWidth: "0.6px", zIndex: -2 }}
          />

          {/* Bitcoin badge */}
          <Img
            src={`${BASE_URL}/assets/day-2/Group1.svg`}
            width={119}
            height={97}
            alt=""
            style={{ position: "absolute", top: "0px", left: "0px", width: "119px", height: "97px", opacity: 1 }}
          />

          {/* ── Footer ── */}
          <Img
            src={`${BASE_URL}/assets/day-2/vector.svg`}
            width={600}
            height={148}
            alt=""
            style={{ position: "absolute", top: "9119px", left: "0px", width: "600px", height: "148px", zIndex: -1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-2/group.svg`}
            width={600}
            height={148}
            alt=""
            style={{ position: "absolute", top: "9118px", left: "0px", width: "600px", height: "148px", zIndex: 0 }}
          />
          {/* ellipse-78 footer glow */}
          <Img
            src={`${BASE_URL}/assets/day-2/ellipse-78.png`}
            width={600}
            height={153}
            alt=""
            style={{ position: "absolute", top: "9100px", left: "auto", right: "0px", width: "600px", height: "153px", opacity: 1, borderWidth: "0.6px", zIndex: 0 }}
          />
          {/* ellipse-79 footer glow */}
          <Img
            src={`${BASE_URL}/assets/day-2/ellipse-79.png`}
            width={600}
            height={232}
            alt=""
            style={{ position: "absolute", top: "9035px", left: "0px", width: "600px", height: "232px", opacity: 1, zIndex: 0 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-2/group-1827.svg`}
            width={116}
            height={26}
            alt="Enhance"
            style={{ position: "absolute", top: "9080px", left: "232px", width: "116px", height: "26px", zIndex: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-2/social-media.svg`}
            width={193}
            height={25}
            alt="Follow us on social media"
            style={{ position: "absolute", top: "9132px", left: "196px", width: "193.3px", height: "25.3px", zIndex: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-2/footer-email-text.svg`}
            width={432}
            height={33}
            alt="This email was sent to hello@hey.com. You can update your email subscription preferences at any time."
            style={{ position: "absolute", top: "9183px", left: "84px", width: "432px", height: "33px", zIndex: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-2/group-1826.svg`}
            width={166}
            height={11}
            alt="Copyright 2020 Enhance 42"
            style={{ position: "absolute", top: "9240px", left: "209px", width: "166px", height: "11px", zIndex: 1 }}
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
  height: "9269px",
  margin: "0 auto",
  opacity: 1,
};
