"use client";

import Footer from "@/components/Footer";
import StatsSection from "@/components/landing-page-components/StatsSection";
import OurMission from "@/components/landing-page-components/OurMission";
import HeroSection from "@/components/landing-page-components/HeroSection";
import SocialMediaSection from '@/components/landing-page-components/SocialSection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <OurMission />
      <StatsSection />
      <SocialMediaSection />
    </>
  );
}
