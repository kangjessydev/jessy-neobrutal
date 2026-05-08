import type { Metadata } from "next";
import { Lexend, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ['400', '700', '800', '900']
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

export const metadata: Metadata = {
  title: "KANGJESSY DEV - Portfolio",
  description: "I build robust, high-performance web applications with a focus on structural integrity and distinctive aesthetic choices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body className={`${lexend.variable} ${spaceGrotesk.variable} bg-[#f9f9f9] text-[#1b1b1b] font-space overflow-x-hidden m-0 p-0 antialiased min-h-screen flex flex-col`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Script src="https://unpkg.com/@phosphor-icons/web@2.1.1" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
