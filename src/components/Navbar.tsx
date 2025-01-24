import Image from 'next/image';
import { Search, BellRing, HandCoins, WalletCards, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="text-white px-6 py-4 flex items-center">
      {/* Logo y barra de búsqueda */}
      <div className="flex items-center gap-8">
        <Image src="/volumchain.svg"
          alt="VolumChain Logo"
          width={83}
          height={63}
          priority
          className="object-contain"
        />
        
        {/* Barra de búsqueda */}
        <div className="search-container relative w-[380px]">
          <input
            type="text"
            placeholder="Search"
            className="search-bar w-full py-2 px-4 bg-[#07081F] border border-[#53ACEC] rounded-full text-[14px] text-gray-300 placeholder-gray-500 focus:outline-none"
          />
          <div className="search-icon absolute right-2.5 top-1/2 -translate-y-1/2">
            <div className="bg-[#53ACEC] p-1 rounded-[8px]">
              <Search className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Íconos de navegación */}
      <div className="flex items-center gap-16 ml-auto pr-12">
        <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <Home className="w-6 h-6 text-red-500" />
          <span className="text-[13px]">Home</span>
        </div>
        <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <BellRing className="w-6 h-6 text-[#53ACEC]" />
          <span className="text-[13px]">Notifications</span>
        </div>
        <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <HandCoins className="w-6 h-6 text-[#53ACEC]" />
          <span className="text-[13px]">My NFTs</span>
        </div>
        <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <WalletCards className="w-6 h-6 text-[#53ACEC]" />
          <span className="text-[13px]">Volunteering</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;