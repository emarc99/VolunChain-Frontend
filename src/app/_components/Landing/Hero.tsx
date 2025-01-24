import { HeroButtons } from "./HeroButtons";

export function Hero() {
  return (
    <div className="max-w-[1076px] mx-auto">
      <h2 className="text-[64px] font-bold mb-6 bg-clip-text text-white">
        VolunChain: Transforming Volunteering, One Block at a Time
      </h2>
      <p className="text-[24px] text-text-muted mb-8 text-white max-w-[850px] mx-auto">
        Organizations post volunteer opportunities, and users join projects they love.
        Earn unique NFTs as proof of your impact!
      </p>
      <HeroButtons />
    </div>
  );
} 