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

export default function Day0Email() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&family=Exo+2:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <Preview>Namaste! Welcome to Gateway to Web 3.0 — Day 0</Preview>
      <Body style={body}>
        <Container style={{ ...container, position: "relative" as const, zIndex: 0, overflow: "hidden" as const }}>
          {/* Full-page dots & grid background (exported from Figma) */}
          <Img
            src={`${BASE_URL}/assets/day-0/grid-bg.png`}
            width="600"
            height="3008"
            alt=""
            style={{ position: "absolute", top: 0, left: "-2px", width: "calc(100% + 4px)", height: "3207px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Upper text backdrop */}
          <Img
            src={`${BASE_URL}/assets/day-0/gradient-1.png`}
            alt=""
            style={{ position: "absolute", top: "1348px", left: "0", width: "600px", height: "520px", maxWidth: "none", zIndex: -1, pointerEvents: "none", opacity: 0.6 }}
          />
          {/* Bottom text backdrop */}
          <Img
            src={`${BASE_URL}/assets/day-0/Rectangle-3.png`}
            alt=""
            style={{ position: "absolute", top: "2306px", left: "0", width: "600px", height: "450px", maxWidth: "none", zIndex: -1, pointerEvents: "none", opacity: 0.5 }}
          />
          {/* Header — "FUTURE IS NOW" glitch banner */}
          <Section style={{ ...header, position: "absolute" as const, top: 0, left: 0, width: "100%", zIndex: 0 }}>
            <Img
              src={`${BASE_URL}/assets/day-0/header-glow.png`}
              alt=""
              style={{
                position: "absolute",
                top: "-342px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "450px",
                height: "750px",
                maxWidth: "none",
                zIndex: -1,
                pointerEvents: "none",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
              }}
            />
            <Img
              src={`${BASE_URL}/assets/day-0/header-gradient-rect.png`}
              alt=""
              style={{
                position: "absolute",
                top: "17px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "616px",
                height: "138px",
                maxWidth: "none",
                borderRadius: "10px",
                opacity: 1,
                zIndex: -1,
                pointerEvents: "none",
              }}
            />
            <Img
              src={`${BASE_URL}/assets/day-0/future-is-now.png`}
              width="251"
              height="126"
              alt="FUTURE IS NOW"
              style={{ position: "relative" as const, top: "-40px", zIndex: 1, display: "block", margin: "0 auto", width: "251px", height: "126px" }}
            />
          </Section>

          {/* Content — every block below is pinned to its exact Figma page-absolute coordinate */}

          {/* Namaste — Figma 811:22: x:58, y:174, w:501, h:59 */}
          <Section style={{ position: "absolute" as const, top: "174px", left: "58px", width: "501px" }}>
            <Text style={greeting}>Namaste, 🙏</Text>
            <Text style={{ ...greeting, fontSize: "15px" }}>
              I&apos;m &lt;Name&gt; and I&apos;m super-psyched that you are reading this!
            </Text>
          </Section>

          {/* Giphy toast — Figma 811:23, re-flowed to clear overlap */}
          <Img
            src={`${BASE_URL}/assets/day-0/giphy-toast.gif`}
            alt=""
            style={{ position: "absolute", top: "260px", left: "164px", width: "271px", height: "152.4375px", maxWidth: "none", borderRadius: "5px" }}
          />

          {/* Figma 811:24, re-flowed to clear overlap */}
          <Section style={{ position: "absolute" as const, top: "432px", left: "58px", width: "485px" }}>
            <Text style={bodyText}>
              Now that you&apos;re here, allow me to take it for granted that you can see what i&rsquo;m seeing too, a hyped up world going gaga over things like{" "}
              <span style={{ color: "#42ff00" }}>Metaverse, NFTs, DeFi, Blockchain, Bitcoin</span>, etc etc..
            </Text>
          </Section>

          {/* Figma 811:25 (+ "Whatever the cause..."), re-flowed to clear overlap */}
          <Section style={{ position: "absolute" as const, top: "551px", left: "53px", width: "485px" }}>
            <Text style={bodyText}>
              You might also not really know what all these terms are but realize that the buzz is real and don&apos;t wish to miss out on riding the wave. Or you might have some knowledge that you are clueless how to apply, or might just want to expand on it at the very least.
            </Text>
            <Text style={bodyText}>
              Whatever the cause, this course could be the right resort for you.
            </Text>
          </Section>

          {/* Yoda gif — Figma 811:26, re-flowed to clear overlap */}
          <Img
            src={`${BASE_URL}/assets/day-0/good-choice-yoda.jpg`}
            alt=""
            style={{ position: "absolute", top: "743px", left: "164px", width: "271px", height: "205.1178px", maxWidth: "none", borderRadius: "5px" }}
          />

          {/* Figma 811:27, re-flowed to clear overlap */}
          <Section style={{ position: "absolute" as const, top: "969px", left: "60px", width: "478px" }}>
            <Text style={bodyText}>
              For the next <span style={{ color: "#00e5ff" }}>9 days</span>, I&apos;ll be your guide all through for an amazing little crypto expedition, at the end of which you will find yourself sufficiently conversant in the realms of blockchain, cryptocurrencies, and the enticing new avenue of emerging technologies.
            </Text>
          </Section>

          {/* Mountain graphic — Figma 811:33 "Group 1783", re-flowed to clear overlap */}
          <Img
            src={`${BASE_URL}/assets/day-0/Group-1783.png`}
            alt=""
            style={{ position: "absolute", top: "1141px", left: "137px", width: "321px", height: "207px", maxWidth: "none" }}
          />

          {/* Corner diamonds — kept at user-tuned positions, shifted to track the re-flowed content */}
          <Img
            src={`${BASE_URL}/assets/day-0/corner-diamond-1.png`}
            alt=""
            style={{ position: "absolute", top: "1161px", right: "0", width: "60px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />
          <Img
            src={`${BASE_URL}/assets/day-0/corner-diamond-2.png`}
            alt=""
            style={{ position: "absolute", top: "1491px", left: "0", width: "60px", maxWidth: "none", zIndex: -1, pointerEvents: "none" }}
          />

          {/* Figma 811:28 "Here you will:" + bullets, re-flowed to clear overlap */}
          <Section style={{ position: "absolute" as const, top: "1368px", left: "47px", width: "480px" }}>
            <Text style={bodyText}>Here you will:</Text>
            <ul style={listStyle}>
              <li style={listItem}>
                Learn the <span style={{ color: "#a78bfa" }}>Fundamentals</span> of Blockchain, Cryptocurrencies and their potential Global Impact.
              </li>
              <li style={listItem}>
                Develop a solid <span style={{ color: "#00e5ff" }}>core understanding of transactions</span>, blockchain&apos;s inner workings with explicit explanations of mining, staking, decentralized consensus mechanisms, cryptography, and other key underlying concepts.
              </li>
              <li style={listItem}>
                Get acquainted with all the <span style={{ color: "#a78bfa" }}>major trends</span> of the cryptoverse from the waves of ICO&apos;s to current day NFTs &amp; DAO&apos;s.
              </li>
              <li style={listItem}>
                Know about cryptocurrency exchanges, how to <span style={{ color: "#00e5ff" }}>create accounts</span> of your own, and safely buy as well as <span style={{ color: "#00e5ff" }}>trade in cryptocurrencies</span>.
              </li>
              <li style={listItem}>
                <span style={{ color: "#a78bfa" }}>Understand</span> the various <span style={{ color: "#fb923c" }}>opportunities</span> and <span style={{ color: "#f472b6" }}>risks</span> involved.
              </li>
              <li style={listItem}>
                Learn to swiftly <span style={{ color: "#00e5ff" }}>glide into day to day happenings</span> of Blockchain &amp; Crypto economies &amp; communities comprising of early adopters, innovators, tech enthusiasts, entrepreneurs, investors, and experts.
              </li>
            </ul>
          </Section>

          {/* Figma 873:56, re-flowed to clear overlap */}
          <Section style={{ position: "absolute" as const, top: "1910px", left: "58px", width: "483px" }}>
            <Text style={bodyText}>
              This crash course is focused on{" "}
              <span style={{ color: "#a78bfa" }}>2 broad goals: Familiarization and Jump Start</span> - Familiarization with the wide world of cryptocurrencies and Jump Start at{" "}
              <span style={{ color: "#00e5ff" }}>making it work for you</span>.
            </Text>
          </Section>

          {/* Flash gif — Figma 811:29, re-flowed to clear overlap */}
          <Img
            src={`${BASE_URL}/assets/day-0/flash-gif.gif`}
            alt=""
            style={{ position: "absolute", top: "2029px", left: "175px", width: "251px", height: "141.1875px", maxWidth: "none", borderRadius: "5px" }}
          />

          {/* Figma 873:44, re-flowed to clear overlap */}
          <Section style={{ position: "absolute" as const, top: "2190px", left: "58px", width: "494px" }}>
            <Text style={bodyText}>
              The meat of the course will arrive to you via email over the next 1 week where I&apos;ll introduce you to everything from knowing to using the technology that is disrupting the way we deal with money and everything else today.
            </Text>
          </Section>

          {/* Figma 811:30 (tools section through closing lines), re-flowed to clear overlap */}
          <Section style={{ position: "absolute" as const, top: "2336px", left: "58px", width: "485px" }}>
            <Text style={bodyText}>
              As the course takes off tomorrow, here are some <span style={{ color: "#00e5ff" }}>cool tools &amp; links</span> for you to start with a bang:
            </Text>
            <ul style={listStyle}>
              <li style={listItem}>
                Install the <span style={{ color: "#fb923c" }}>Brave</span> browser on your device for a faster, more secure and private browsing experience. It also comes in use for creating a cryptocurrency wallet integrated right into your browser.
              </li>
            </ul>
            <Text style={bodyText}>
              And while there, don&apos;t forget to sign up for the <span style={{ color: "#fb923c" }}>Brave Rewards</span> to start earning your first cryptocurrency in the form of Basic Attention Tokens(BAT).
            </Text>
            <ul style={{ ...listStyle, margin: "0 0 52px" }}>
              <li style={listItem}>
                Install the <span style={{ color: "#00e5ff" }}>CoinMarketCap App</span> on your phone to keep track of the crypto market anytime, anywhere.
              </li>
              <li style={listItem}>
                Check out <span style={{ color: "#42ff00" }}>Web3 Words</span> for a stroll around the concepts.
              </li>
              <li style={listItem}>
                Join our discord channel &quot;Blockchain &amp; Crypto 101&quot; dedicated to crypto &amp; blockchain enthusiasts{" "}
                <Link href="#" style={link}>here</Link>.
              </li>
            </ul>

            <Text style={{ ...bodyText, marginBottom: "36px" }}>
              Any questions you might have through the journey, I&apos;d definitely want to hear them! Just reply to this email or ask away on our channel on discord and I&apos;ll be happy to help.
            </Text>
            <Text style={bodyText}>So, see you tomorrow :)</Text>
            <Text style={bodyText}>Happy learning, Name !</Text>
          </Section>

          {/* Footer — purple floor grid rising into the gradient — re-flowed to clear overlap */}
          <Section style={{ ...footerWrapper, position: "absolute" as const, top: "2810px", left: 0, width: "100%", height: "397px", zIndex: 0 }}>
            {/* Footer glow — Figma node 811:8500 "Group 1798" */}
            <Img
              src={`${BASE_URL}/assets/day-0/footer-glow.png`}
              alt=""
              style={{
                position: "absolute",
                top: "-200px",
                left: "-10px",
                width: "487.2px",
                height: "618.25px",
                maxWidth: "none",
                zIndex: -1,
                pointerEvents: "none",
                opacity: 0.7,
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, transparent 50%, black 70%, transparent 90%), linear-gradient(to right, black 10%, transparent 50%)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, transparent 50%, black 70%, transparent 90%), linear-gradient(to right, black 10%, transparent 50%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect",
              }}
            />
            {/* Star — Figma node 811:8513: x:27, y:2811.5 (page-absolute); local top = 200.5px */}
            <Img
              src={`${BASE_URL}/assets/day-0/star-img.png`}
              alt=""
              style={{ position: "absolute", top: "200.5px", left: "27px", width: "24px", height: "27px" }}
            />
            <Img
              src={`${BASE_URL}/assets/day-0/footer-bg.png`}
              width="600"
              height="397"
              alt=""
              style={{ position: "absolute", top: 0, left: "-2px", display: "block", width: "calc(100% + 4px)", maxWidth: "none", height: "397px", zIndex: -1 }}
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
  height: "3207px",
  margin: "0 auto",
  opacity: 1,
};

const header = {
  padding: "48px 24px 0",
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

const listStyle = {
  margin: "0 0 20px",
  paddingLeft: "20px",
  textAlign: "left" as const,
};

const listItem = {
  fontFamily: "'Exo 2', sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "170%",
  letterSpacing: "0px",
  color: "rgba(255,255,255,0.85)",
  marginBottom: "20px",
  textAlign: "left" as const,
};

const link = {
  color: "#00e5ff",
  textDecoration: "none",
};

const footerWrapper = {};
