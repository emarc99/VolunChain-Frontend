import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VolunChain - Volunteer Platform",
  description: "A blockchain-powered platform connecting volunteers with organizations",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0a0b1a] text-white min-h-screen`}>{children}</body>
    </html>
  )
}

