import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Prajakta | Clinical Nutritionist & Dietitian",
    template: "%s | Prajakta Nutrition",
  },
  description: "Personalised, evidence-based nutrition for PCOS, postpartum care, women’s health and sustainable well-being.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
