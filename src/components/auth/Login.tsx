"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A061E]">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#151127] rounded-[20px] overflow-hidden max-w-4xl w-full mx-4">
        <div className="relative hidden md:block p-8">
          <div className="absolute top-8 left-8">
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="#EF565D"
                />
              </svg>
              <span className="text-white font-semibold text-xl">
                VolunChain
              </span>
            </div>
          </div>
          <Image
            src="/volunchain-illustration.png"
            alt="VolunChain Illustration"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-8 md:p-12">
          <p className="text-[#7C88B1] text-sm mb-2">Welcome back</p>
          <h1 className="text-white text-2xl font-bold mb-2">
            Sign In to VolunChain
          </h1>
          <p className="text-[#7C88B1] text-sm mb-6">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#4285f4] hover:underline">
              Register
            </Link>
          </p>

          <button className="w-full mb-6 flex items-center justify-center gap-2 bg-transparent border border-[#2D2A3E] text-white rounded-lg py-2.5 hover:bg-[#2D2A3E]/50 transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1711 8.36788H17.4998V8.33329H9.99984V11.6666H14.7094C14.0223 13.6071 12.1761 15 9.99984 15C7.23859 15 4.99984 12.7612 4.99984 10C4.99984 7.23871 7.23859 5 9.99984 5C11.2744 5 12.4344 5.48612 13.3177 6.28612L15.8261 3.77779C14.3177 2.36663 12.2594 1.5 9.99984 1.5C5.31734 1.5 1.49984 5.31746 1.49984 10C1.49984 14.6825 5.31734 18.5 9.99984 18.5C14.6823 18.5 18.4998 14.6825 18.4998 10C18.4998 9.43829 18.4098 8.89371 18.1711 8.36788Z"
                fill="#FFC107"
              />
            </svg>
            Sign in with Google
          </button>

          <div className="space-y-4">
            <div>
              <label className="block text-[#7C88B1] text-sm mb-2">Email</label>
              <Input
                type="email"
                placeholder="Your email here"
                className="bg-[#1D1932] border-[#2D2A3E] text-white placeholder:text-[#7C88B1] h-12"
              />
            </div>
            <div>
              <label className="block text-[#7C88B1] text-sm mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="Your password here"
                className="bg-[#1D1932] border-[#2D2A3E] text-white placeholder:text-[#7C88B1] h-12"
              />
            </div>
            <Button className="w-full bg-[#EF565D] hover:bg-[#EF565F]/90 text-white h-12 mt-2">
              Log In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
