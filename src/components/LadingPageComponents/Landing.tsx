import Image from "next/image";
import Button from "../ui/Button";

function Landing() {
  return (
    <>
      <div className="w-full flex justify-center pt-4 px-4 sm:px-6 md:px-8">
        <button className="group flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border-2 border-secondary bg-background-primary hover:border-secondary/50 transition-colors text-sm sm:text-base">
          <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-secondary text-tertiary whitespace-nowrap">
            New
          </span>
          <span className="text-white hidden sm:inline">Take a Look to the Lastest</span>
          <span className="text-white sm:hidden">Latest</span>
          <span className="text-secondary whitespace-nowrap">Volunteers Opportunities</span>
        </button>
      </div>
      <main className="flex flex-col justify-center items-center text-center px-4 md:px-6 lg:px-8">
        <div className="w-full max-w-[1076px] mx-auto">
          <h2 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-4 md:mb-6 bg-clip-text text-white leading-tight">
            VolunChain: Transforming Volunteering, One Block at a Time
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-text-muted mb-6 md:mb-8 text-white max-w-[850px] mx-auto">
            Organizations post volunteer opportunities, and users join projects they love.
            Earn unique NFTs as proof of your impact!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" textColor="secondary" className="text-tertiary">I'm a fundation</Button>
            <Button variant="secondary" textColor="secondary" className="!bg-background">Start as Volunteer</Button>
          </div>
        </div>
      </main>
      <div className="w-full relative mt-8 sm:mt-12 md:mt-16">
        <div className="absolute left-0 right-0 h-full bg-gradient-to-b from-transparent from-0% via-[#070B1F40] via-50% to-[#070B1F] to-90% z-10" />
        <div className="flex justify-center">
          <Image
            src="/assets/landing.png"
            alt="Volunteers illustration"
            width={1426}
            height={1011}
            className="relative z-0 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[1426px]"
            priority
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
