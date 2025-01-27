import React from "react";
import LatestVolunteersCard from "../ui/LatestVolunteersCard";

const mockData = [
  {
    companyName: "Red Cross",
    title: "Emergency Response Team Volunteer",
    description: "Join our emergency response team to help communities affected by disasters and emergencies.",
    categories: ["Disaster Relief", "Healthcare"],
    imageUrl: "/images/volunteering-assets/redcross.png"
  },
  {
    companyName: "Wildlife Conservation",
    title: "Animal Care and Protection",
    description: "Help protect and care for endangered species in our wildlife sanctuary.",
    categories: ["Animal Welfare", "Environment"],
    imageUrl: "/images/volunteering-assets/wildlifeconservation.png"
  },
  {
    companyName: "Local Food Bank",
    title: "Food Distribution Volunteer",
    description: "Support our mission to provide food security to vulnerable communities.",
    categories: ["Social Services", "Community"],
    imageUrl: "/images/volunteering-assets/localfoodbank.png"
  },
  {
    companyName: "Local Library",
    title: "Children's Reading Program",
    description: "Help foster a love of reading by mentoring young children in our after-school program.",
    categories: ["Education", "Social Services"],
    imageUrl: "/images/volunteering-assets/childrensreadingprogram.png"
  },
  {
    companyName: "City Parks Department",
    title: "Park Cleanup Coordinator",
    description: "Lead community efforts to maintain and beautify our public parks and green spaces.",
    categories: ["Environment", "Community"],
    imageUrl: "/images/volunteering-assets/parkcleanupcoordinator.png"
  },
  {
    companyName: "Senior Care Center",
    title: "Elder Companion Program",
    description: "Provide companionship and support to elderly residents through regular visits and activities.",
    categories: ["Healthcare", "Social Services"],
    imageUrl: "/images/volunteering-assets/seniorcompanionprogram.png"
  }
];

const LatestVolunteersSection = () => {
  return (
    <section className="w-full px-[10px] md:px-[30px] pt-[40px] max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px] justify-items-center">
        {mockData.map((item, index) => (
          <LatestVolunteersCard
            key={index}
            {...item}
          />
        ))}
      </div>
      
      <div className="flex flex-row justify-center items-center py-[24px] w-full">
        <div className="flex flex-row justify-center items-center w-[420px] h-[94px]">
          <div className="flex flex-row justify-center items-center gap-[8px]">
            <button className="flex justify-center items-center w-[56px] h-[56px]">
              <svg width="57" height="57" viewBox="0 0 57 57" fill="none">
                <path d="M35.625 42.75L21.375 28.5L35.625 14.25" stroke="#9D9D9D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <span className="text-[36px] text-secondary font-[400] leading-[16px]">1</span>
            <span className="text-[36px] text-[#A8A8A8] font-[400] leading-[16px]">2</span>
            <span className="text-[36px] text-[#A8A8A8] font-[400] leading-[16px]">3</span>
            <span className="text-[36px] text-[#A8A8A8] font-[400] leading-[16px]">4</span>
            <span className="text-[36px] text-[#A8A8A8] font-[400] leading-[16px]">5</span>
            <span className="text-[36px] text-[#A8A8A8] font-[400] leading-[16px]">...</span>
            
            <button className="flex justify-center items-center w-[56px] h-[56px]">
              <svg width="57" height="57" viewBox="0 0 57 57" fill="none">
                <path d="M21.375 42.75L35.625 28.5L21.375 14.25" stroke="#53ACEC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestVolunteersSection; 