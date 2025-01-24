"use client";

export function OpportunitiesButton() {
  return (
    <button className="group flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full border-2 border-secondary bg-background-primary hover:border-secondary/50 transition-colors text-sm sm:text-base">
      <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-xs rounded-full bg-secondary text-tertiary whitespace-nowrap">
        New
      </span>
      <span className="text-white hidden sm:inline">Take a Look to the Lastest</span>
      <span className="text-white sm:hidden">Latest</span>
      <span className="text-secondary whitespace-nowrap">Volunteers Opportunities</span>
    </button>
  );
} 