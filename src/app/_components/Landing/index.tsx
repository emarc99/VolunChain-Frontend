import { Header } from "./Header";
import { Hero } from "./Hero";
import { HeroImage } from "./HeroImage";

function Landing() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center text-center px-4 md:px-6 lg:px-8">
        <Hero />
      </main>
        <HeroImage />
    </>
  );
}

export default Landing;
