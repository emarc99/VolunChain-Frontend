import { Header } from "./Header";
import { Hero } from "./Hero";
import { HeroImage } from "./HeroImage";

export function Landing() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-background-primary text-text-light overflow-x-hidden">
      <Header />
      <main className="flex flex-col justify-center items-center text-center">
        <Hero />
        <HeroImage />
      </main>
    </div>
  );
}
