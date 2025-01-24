import Image from "next/image";
import { Search, BellRing, HandCoins, WalletCards, Home } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsMenuOpen((prevState) => !prevState);
  return (
    <nav className="w-full flex items-center justify-between">
      <Link href="/" className="text-white text-2xl font-semibold">
        <div className="w-[226px] h-[113px]">
          <img src="/logo.svg" className="w-full h-full" alt="logo" />
        </div>
      </Link>

      <button
        aria-label="Toggle Navigation Menu"
        onClick={toggleMenu}
        className="lg:hidden text-white"
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      <div
        className={`lg:flex items-center space-x-6 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="flex items-center gap-x-7">
          <Link href="/" className="">
            <p className="text-white text-lg font-semibold ">Home</p>
          </Link>

          <Link href="/" className="">
            <p className="text-white text-lg font-semibold ">Our Mission</p>
          </Link>

          <Link href="/" className="">
            <p className="text-white text-lg font-semibold ">Users</p>
          </Link>

          <Link href="/" className="">
            <p className="text-white text-lg font-semibold ">Social Media</p>
          </Link>
        </div>

        <div className="flex space-x-4">
          <Button variant="secondary"  className="border-2 border-[#73B9EB] text-[#73B9EB]"  type={"button"}>
            Contact us
          </Button>
          <Button variant="primary" className="bg-[#EF565D] border border-[#EF565D]" textColor="black" type={"button"}>
            Log in
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
