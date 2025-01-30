import { BarChart3, BookOpen, Home, Activity, Laptop, Send } from "lucide-react"
import Image from "next/image"
import Card from "../ui/Card"
import CardHeader from "../ui/CardHeader"
import Link from "next/link"

const foundations = [
  {
    name: "ArkSpace",
    description: "Social services for people",
    color: "bg-blue-500",
  },
  {
    name: "Optima Inc",
    description: "Charity work & education",
    color: "bg-orange-500",
  },
  {
    name: "Duty & Quality",
    description: "Builders of homes",
    color: "bg-red-500",
  },
  {
    name: "Martyr Co",
    description: "Clean energy providers",
    color: "bg-gray-500",
  },
  {
    name: "High Tech",
    description: "Technology for everyone",
    color: "bg-purple-500",
  },
  {
    name: "PaperFlights",
    description: "Travelers & helpers",
    color: "bg-blue-400",
  },
]

export default function FoundationsList() {
  return (
    <Card className="mt-8">
      <CardHeader title="Foundations" action={{ label: "See All" }} />

      <div className="space-y-8">
        {foundations.map((foundation) => (
          <div key={foundation.name} className="flex items-center gap-3 group">
            <div className="h-10 w-10 overflow-hidden rounded-xl">
              <Image
                src="/placeholders/foundation-image.svg"
                alt={foundation.name}
                width={40}
                height={40}
                className={`${foundation.color} bg-opacity-10 group-hover:bg-opacity-20 transition-colors`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <Link 
                href="#" 
                className="text-[0.9375rem] font-medium text-white hover:text-[#2D9CDB] transition-colors block"
              >
                {foundation.name}
              </Link>
              <p className="text-xs text-gray-400 truncate">{foundation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

