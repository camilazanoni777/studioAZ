import type { Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#f8f6f1",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
