import type { Metadata } from "next";
import { Lexend, Space_Grotesk } from "next/font/google";
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
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_back,arrow_forward,bolt,box,menu,open_in_new,deployed_code,palette,javascript,database,terminal,cloud,work,alternate_email,code,chat,east,forum,close,arrow_outward,history_edu,work_history,location_on,send,rocket_launch,article,account_circle,rss_feed,share,podcasts" />
      </head>
      <body className={`${lexend.variable} ${spaceGrotesk.variable} bg-[#f9f9f9] text-[#1b1b1b] font-space overflow-x-hidden m-0 p-0 antialiased min-h-screen flex flex-col`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
