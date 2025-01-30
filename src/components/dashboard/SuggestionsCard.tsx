import Image from "next/image"
import Link from "next/link"
import Card from "../ui/Card"
import CardHeader from "../ui/CardHeader"

const suggestions = [
  {
    image: "/placeholder.svg?height=40&width=40",
    name: "DripFisshes",
    description: "Ocean cleaning services",
  },
  {
    image: "/placeholder.svg?height=40&width=40",
    name: "Black Bear Association",
    description: "Environmental Cleanup",
  },
]

export default function SuggestionsCard() {
  return (
    <Card className="w-full p-8">
      <CardHeader 
        title="Suggested for you" 
        action={{ label: "See All" }}
      />
      <div className="space-y-8">
        {suggestions.map((suggestion, i) => (
          <div key={i} className="flex items-center gap-3">
            <Image
              src={suggestion.image}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1">
              <p className="font-medium">{suggestion.name}</p>
              <p className="text-xs text-gray-400">{suggestion.description}</p>
            </div>
            <Link href="#" className="text-link text-sm hover:underline">
              Check Out
            </Link>
          </div>
        ))}
      </div>
    </Card>
  )
} 