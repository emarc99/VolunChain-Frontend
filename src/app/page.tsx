"use client";

import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 lg:p-30 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>VolunChain</h1>
      //Example Components
      {/*  <div className="flex flex-col gap-5 w-2/3 justify-center">
        <div className="flex gap-3 w-2/5 justify-center">
          <Button
            type="button"
            variant="primary"
            onClick={() => console.log("click")}
            textColor="black"
          >
            I'm a fundation
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => console.log("click")}
            textColor="secondary"
          >
            Start as Volunteer
          </Button>
        </div>

        <div className="flex w-1/4">
          <Input
            type="text"
            placeholder="Your email here"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
