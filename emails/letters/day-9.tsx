import { Html, Body, Container, Head, Preview, Img } from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function Day9Email() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>Day 9</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative", zIndex: 0, overflow: "hidden" }}>
          <Img
            src={`${BASE_URL}/assets/day-9/To-be-a-successful.svg`}
            width={498}
            height={5708}
            alt=""
            style={{ position: "absolute", top: "335px", left: "55px", width: "498px", height: "5708px", opacity: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-9/vector.svg`}
            width={598}
            height={151}
            alt=""
            style={{ position: "absolute", top: "0px", right: "0px", width: "598px", height: "151px", opacity: 1, zIndex: -1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-9/Realm-of-NFTs1.svg`}
            width={263}
            height={52}
            alt="Realm of NFTs"
            style={{ position: "absolute", top: "57px", left: "56px", width: "263px", height: "52px", opacity: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-9/Realm-of-NFTs.svg`}
            width={263}
            height={52}
            alt="Realm of NFT's"
            style={{ position: "absolute", top: "60px", left: "58px", width: "263px", height: "52px", opacity: 1 }}
          />
          <Img
            src={`${BASE_URL}/assets/day-9/group.svg`}
            width={600}
            height={152}
            alt=""
            style={{ position: "absolute", top: "0px", right: "0px", width: "600px", height: "152px", opacity: 1, zIndex: -1 }}
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
  height: "7328px",
  margin: "0 auto",
  opacity: 1,
};
