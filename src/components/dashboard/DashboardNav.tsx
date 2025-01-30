import { Home, Bell, Users, Medal } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"
import Image from "next/image"
import SearchBar from "@/components/ui/SearchBar"

const navItems = [
  { name: "Home", href: "/", icon: Home, isActive: true },
  { name: "Notifications", href: "/notifications", icon: Bell, hasNotification: true },
  { name: "My NFTs", href: "/nfts", icon: Medal },
  { name: "Volunteering", href: "/volunteering", icon: Users },
]

export default function DashboardNav() {
  return (
    <div className=" w-full bg-tertiary/80 backdrop-blur-sm mt-[1.5rem]">
      <nav className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="w-[4rem]"> 
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo_vc.svg" alt="Logo" width={130} height={65} />
              </Link>
            </div>
            <div className="relative hidden md:block">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center md:gap-24">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex flex-col items-center px-5 py-2 rounded-full hover:bg-background"
                >
                  <Icon className={clsx("h-[1.8rem] w-[1.8rem]", item.isActive ? "text-primary" : "text-secondary")} />
                  <span className={clsx("hidden md:block text-white text-sm mt-1", item.isActive ? "text-primary" : "text-white")}>
                    {item.name}
                  </span>
                  {item.hasNotification && <span className="absolute left-9 md:left-16 top-1 h-2 w-2 rounded-full bg-primary" />}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}

