import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gateway to Web 3.0",
  description: "A trip into the realms of Blockchain & Cryptocurrencies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
