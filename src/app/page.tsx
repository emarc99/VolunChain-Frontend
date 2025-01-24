"use client";

import Footer from "@/components/Footer";
import StartSection from "@/components/StartSection";


export default function Home() {

  return (
    <div className="grid min-h-screen p-4 lg:p-30 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <StartSection />
      <Footer />
    </div>
  );
}
