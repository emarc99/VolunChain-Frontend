import type { Metadata } from "next";
import { Geist, Geist_Mono, Fustat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VolunChain | Transforming Volunteering",
  description: "Join volunteer projects you love and earn NFTs as proof of your impact. Connect with organizations and make a difference, one block at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fustat.variable}`}
    >
      <body className="flex flex-col justify-center min-h-screen text-text-light overflow-x-hidden">{children}</body>
    </html>
  );
}
