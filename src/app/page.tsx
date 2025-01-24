import Landing from "@/app/_components/Landing";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <>
      <Landing />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-4 lg:p-30 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Footer />
      </div>
    </>
  );
}
