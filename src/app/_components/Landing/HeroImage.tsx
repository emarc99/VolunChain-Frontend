import Image from "next/image";

export function HeroImage() {
  return (
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
  );
} 