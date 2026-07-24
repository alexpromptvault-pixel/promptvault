import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvora — AI Workflows That Ship",
  description: "Test production-grade AI prompts across dev, marketing, founder, and writing roles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
