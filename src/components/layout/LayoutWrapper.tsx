'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NextTopLoader from 'nextjs-toploader';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // List of paths that shouldn't show global UI
  const isStandalone = pathname === '/bio' || pathname === '/resume';

  return (
    <>
      <NextTopLoader 
        color="#ffd700"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #ffd700,0 0 5px #ffd700"
      />
      {!isStandalone && <Navbar />}
      <main className={`flex-grow ${!isStandalone ? 'pt-[104px]' : ''}`}>
        {children}
      </main>
      {!isStandalone && <Footer />}
    </>
  );
}
