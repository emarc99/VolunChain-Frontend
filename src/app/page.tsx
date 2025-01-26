"use client";

import Footer from "@/components/Footer";
import StartSection from "@/components/StartSection";
import OurMission from "@/components/landing-page-components/OurMission";
import HeroSection from "@/components/landing-page-components/HeroSection";

export default function LandingPage() {
  return (
    <div className="grid min-h-screen p-4 lg:p-30 pb-20 sm:p-20">
      <HeroSection />
      <OurMission />
      <StartSection />
      <Footer />
    </div>
  );
}
