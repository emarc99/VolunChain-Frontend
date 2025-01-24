"use client";

import Button from "@/components/ui/Button";

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button variant="primary" textColor="tertiary">I'm a fundation</Button>
      <Button variant="secondary" textColor="secondary">Start as Volunteer</Button>
    </div>
  );
} 