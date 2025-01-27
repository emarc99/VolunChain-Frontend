"use client";
import React from "react";
import Button from "./Button";
import NotFound from "../../../public/404.svg";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {LucideArrowLeft} from "lucide-react";
const Notfound = () => {

   const router = useRouter();
   const handleBack = () => {
      router.back();
   };

   return (
      <div className="flex flex-col justify-center items-center w-full h-[100vh]">
         <Image src={NotFound} alt="not-found" />
         <section className="bottom-8 sm:bottom-[-1.5rem] flex justiify-center items-center flex-col w-full">
            <p className="text-secondary text-[18px] font-[800] text-center"> 404 - Page Not Found</p>
            <br />
            <Button variant="primary" textColor="secondary" className=" m-auto flex gap-2" onClick={handleBack}>
               <LucideArrowLeft /> Go Back 
            </Button>
         </section>
      </div>
   );
};

export default Notfound;
