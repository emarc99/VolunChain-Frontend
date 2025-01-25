"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/LandingNavbar";


export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 lg:p-30 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Footer />
    </div>
  );
}
