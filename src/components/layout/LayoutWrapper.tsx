'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/ui/FloatingChat";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // List of paths that shouldn't show global UI
  const isStandalone = pathname === '/bio' || pathname === '/resume';

  return (
    <>
      {!isStandalone && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isStandalone && <Footer />}
      {!isStandalone && <FloatingChat />}
    </>
  );
}
