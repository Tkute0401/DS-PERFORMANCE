import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import SmoothScroller from "@/components/SmoothScroller";
import ConversionModal from "@/components/ConversionModal";

export const metadata: Metadata = {
  title: "Digital Supremacy | Performance Marketing",
  description: "Engineering Multipliers. Scaling Revenue. High-end performance marketing portfolio and case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white`}
    >
      <body className="min-h-screen w-full max-w-full overflow-x-hidden">
        <SmoothScroller>
          {children}
        </SmoothScroller>
        <ConversionModal />
      </body>
    </html>
  );
}
