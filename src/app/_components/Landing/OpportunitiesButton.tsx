"use client";

export function OpportunitiesButton() {
  return (
    <button className="group flex items-center gap-2 px-6 py-2 rounded-full border-2 border-secondary bg-background-primary hover:border-secondary/50 transition-colors">
      <span className="px-3 py-1 text-xs rounded-full bg-secondary text-tertiary">
        New
      </span>
      <span className="text-white">Take a Look to the Lastest</span>
      <span className="text-secondary">Volunteers Opportunities</span>
    </button>
  );
} 