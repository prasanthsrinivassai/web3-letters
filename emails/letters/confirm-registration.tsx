import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Link,
  Button,
  Hr,
  Head,
  Preview,
  Img,
} from "@react-email/components";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

interface ConfirmRegistrationEmailProps {
  firstName?: string;
  confirmUrl: string;
}

export default function ConfirmRegistrationEmail({
  firstName = "there",
  confirmUrl,
}: ConfirmRegistrationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Confirm your subscription to Gateway to Web 3.0</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header with assets */}
          <Section style={header}>
            <Img src={`${BASE_URL}/assets/upper-plane.svg`} width="600" height="66" alt="" style={{ display: "block" }} />
            <Section style={headerInner}>
              <Img src={`${BASE_URL}/assets/e42-logo.svg`} width="116" height="26" alt="Enhance 42" style={{ marginBottom: "16px" }} />
              <Img src={`${BASE_URL}/assets/wormhole.svg`} width="120" height="122" alt="" style={{ opacity: 0.7 }} />
            </Section>
          </Section>

          {/* Main content */}
          <Section style={content}>
            <Section style={{ marginBottom: "16px" }}>
              <Img src={`${BASE_URL}/assets/waving-hand.svg`} width="32" height="32" alt="👋" style={{ display: "inline-block" }} />
              <Img src={`${BASE_URL}/assets/voila.svg`} width="120" alt="Voilà!" style={{ display: "inline-block", marginLeft: "8px", verticalAlign: "middle" }} />
            </Section>
            <Text style={body_text}>
              You made it, <Link href="#" style={link}>{firstName}</Link>.
            </Text>
            <Text style={body_text}>
              Thanks a ton for hopping onboard with us on this{" "}
              <Link href="#" style={link}>
                Blockchain and Cryptocurrencies 101
              </Link>{" "}
              journey. Pretty excited to have you here.
            </Text>
            <Text style={body_text}>
              Before diving in, you need to{" "}
              <strong>confirm your subscription</strong> by hitting the button
              below.
            </Text>

            <Section style={buttonContainer}>
              <Button href={confirmUrl} style={button}>
                Get Started
              </Button>
            </Section>
          </Section>

          {/* Footer — purple floor grid rising into the gradient */}
          <Section style={{ ...footerWrapper, position: "relative" as const }}>
            <Img
              src={`${BASE_URL}/assets/Vector-1.png`}
              width="56"
              height="52"
              alt=""
              style={{ position: "absolute", top: "-28px", right: "24px" }}
            />
            <Img
              src={`${BASE_URL}/assets/bottom-plane.png`}
              width="600"
              height="170"
              alt=""
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            <Section style={footer}>
              <Img src={`${BASE_URL}/assets/e42-logo.svg`} width="96" height="22" alt="Enhance 42" style={{ margin: "0 auto 20px" }} />
              <Section style={socialLinks}>
                <Img src={`${BASE_URL}/assets/social-media.svg`} width="194" height="26" alt="Social media links" style={{ margin: "0 auto" }} />
              </Section>
              <Text style={footerText}>
                This email was sent to you because you signed up for Gateway to Web 3.0.
              </Text>
              <Text style={footerText}>
                You can update your{" "}
                <Link href="#" style={link}>
                  email subscription preferences
                </Link>{" "}
                at any time
              </Text>
              <Text style={copyright}>Copyright 2024 © Enhance42</Text>
            </Section>
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
  backgroundColor: "#0d0d1f",
  maxWidth: "600px",
  margin: "0 auto",
  border: "1px solid rgba(255,255,255,0.05)",
};

const header = {
  background: "linear-gradient(180deg, #3b0764 0%, #1e1b4b 50%, #0d0d1f 100%)",
  padding: "0",
};

const headerInner = {
  padding: "32px 40px 40px",
  textAlign: "center" as const,
};

const brandTitle = {
  fontSize: "36px",
  fontWeight: "900",
  color: "#ffffff",
  margin: "0 0 8px",
  letterSpacing: "-0.5px",
};

const brandSubtitle = {
  fontSize: "14px",
  color: "rgba(255,255,255,0.6)",
  margin: "0",
};

const content = {
  padding: "40px 40px",
};

const greeting = {
  fontSize: "32px",
  fontWeight: "800",
  color: "#ffffff",
  margin: "0 0 16px",
};

const body_text = {
  fontSize: "15px",
  color: "rgba(255,255,255,0.8)",
  lineHeight: "1.6",
  margin: "0 0 12px",
};

const link = {
  color: "#00e5ff",
  textDecoration: "none",
};

const buttonContainer = {
  margin: "32px 0",
};

const button = {
  backgroundColor: "transparent",
  border: "1px solid #ffffff",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "600",
  padding: "12px 32px",
  textDecoration: "none",
  display: "inline-block",
};

const divider = {
  borderColor: "rgba(255,255,255,0.08)",
  margin: "0",
};

const footerWrapper = {
  background: "linear-gradient(180deg, #09040e 0%, #2a0a4d 45%, #3b0764 100%)",
};

const footer = {
  padding: "0 40px 32px",
  textAlign: "center" as const,
};

const brandName = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#00e5ff",
  margin: "0 0 16px",
};

const socialLinks = {
  margin: "0 0 16px",
};

const socialLink = {
  color: "#ffffff",
  fontSize: "16px",
  margin: "0 8px",
  textDecoration: "none",
};

const footerText = {
  fontSize: "12px",
  color: "rgba(255,255,255,0.4)",
  margin: "0 0 4px",
  lineHeight: "1.5",
};

const copyright = {
  fontSize: "11px",
  color: "rgba(255,255,255,0.25)",
  margin: "12px 0 0",
};
