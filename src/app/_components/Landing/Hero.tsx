import { HeroButtons } from "./HeroButtons";

export function Hero() {
  return (
    <div className="w-full max-w-[1076px] mx-auto">
      <h2 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-4 md:mb-6 bg-clip-text text-white leading-tight">
        VolunChain: Transforming Volunteering, One Block at a Time
      </h2>
      <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-text-muted mb-6 md:mb-8 text-white max-w-[850px] mx-auto">
        Organizations post volunteer opportunities, and users join projects they love.
        Earn unique NFTs as proof of your impact!
      </p>
      <HeroButtons />
    </div>
  );
} 