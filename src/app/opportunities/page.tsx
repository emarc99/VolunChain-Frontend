"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Search, ChevronRightCircle, ChevronLeftCircle } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const categories = [
  "Education",
  "Healthcare",
  "Environment",
  "Social Services",
  "Animal Welfare",
  "Arts & Culture",
  "Health and Well-being",
  "Disaster Relief and Emergency Response",
];

const Opportunities = () => {
  const [search, setSearch] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [visibleButtons, setVisibleButtons] = useState<number>(4);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };



  useEffect(() => {
    const updateVisibleButtons = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleButtons(1);
      else if (width < 768) setVisibleButtons(2); 
      else if (width < 1024) setVisibleButtons(3);
      else setVisibleButtons(4);
    };
 
    updateVisibleButtons();
    window.addEventListener('resize', updateVisibleButtons);
    return () => window.removeEventListener('resize', updateVisibleButtons);
  }, []);
 
  const handleSlide = (direction: "left" | "right") => {
    if (direction === "left") {
      setActiveIndex((prev) => (prev === 0 ? categories.length - visibleButtons : prev - 1));
    } else {
      setActiveIndex((prev) => (prev === categories.length - visibleButtons ? 0 : prev + 1));
    }
  };
 

  return (
    <div className="w-full min-h-screen h-fit px-[20px] md:px-[60px] py-[25px] md:py-[80px] bg-transparent ">
      <div className="w-full h-fit lg:h-[428px] rounded-[37px] bg-[#0F112B] flex flex-col lg:flex-row py-[30px] lg:py-[60px] px-[40px] lg:px-[80px] gap-[10px]">
        <div className="flex flex-col items-start justify-center w-full lg:w-1/2 h-fit gap-[25px] lg:gap-[50px]">
          <h1 className="text-white text-[28px] sm:text-[32px] lg:text-[48px] font-[800]">
            Where would you like to help today?
          </h1>
          <div className="flex relative w-full lg:w-2/3 h-[84px]">
            <Input
              type="text"
              placeholder="Search volunteering options"
              value={search}
              name="options"
              onChange={(e) => handleSearch(e)}
              classname="w-full h-full text-white text-opacity-50 text-[24px] font-[700]"
            />
            <div className="md:w-[53px] w-[45px] h-[45px] md:h-[53px] rounded-[5px] bg-[#73B9EB] absolute right-4 top-4 flex items-center justify-center">
              <Search color="black" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-full">
          <Image
            src="/images/volunteering-header.svg"
            width={500}
            height={500}
            alt="Volunteering Header"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="my-12 relative flex gap-8 items-center w-[95%] mx-auto">
        <ChevronLeftCircle
          onClick={() => handleSlide("left")}
          strokeWidth={1}
          className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] rounded-full text-[#73B9EB] absolute left-0 z-10"
        />

<div className="flex items-center justify-center gap-[24px] overflow-hidden mx-auto w-full py-[10px]">
     {categories
       .slice(activeIndex, activeIndex + visibleButtons)
       .map((category, index) => (
         <Button
           key={index}
           variant="primary"
           type="button"
           textColor="black"
         >
           {category}
         </Button>
       ))}
   </div>

        <ChevronRightCircle
          strokeWidth={1}
          onClick={() => handleSlide("right")}
          className="w-[50px] lg:w-[100px] h-[50px] lg:h-[100px] rounded-full text-[#73B9EB] absolute right-4 z-10"
        />
      </div>
    </div>
  );
};

export default Opportunities;
