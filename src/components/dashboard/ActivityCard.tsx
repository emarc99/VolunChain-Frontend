import EntityList from "@/components/ui/EntityList"

const activities = [
  {
    image: "/placeholder.svg?height=40&width=40",
    title: "You have gotten a new NFT!",
    subtitle: "1m ago",
    action: {
      type: 'image' as const,
      image: "/assets/dashboard/nft.png"
    }
  },
  {
    image: "/placeholder.svg?height=40&width=40",
    title: "DripFishes has a new volunteering",
    subtitle: "15m ago",
    action: {
      type: 'link' as const,
      href: '/volunteering'
    }
  },
]

const lastFewDays = [
  {
    image: "/placeholder.svg?height=40&width=40",
    title: "You have gotten a new NFT!",
    subtitle: "6h ago",
    action: {
      type: 'image' as const,
      image: "/assets/dashboard/nft.png"
    }
  },
  {
    image: "/placeholder.svg?height=40&width=40",
    title: "You received a new NFT!",
    subtitle: "1d ago",
    action: {
      type: 'image' as const,
      image: "/assets/dashboard/nft.png"
    }
  },
  {
    image: "/placeholder.svg?height=40&width=40",
    title: "OceanAid has a new volunteering",
    subtitle: "2d ago",
    action: {
      type: 'link' as const,
      href: '/volunteering'
    }
  },
]

export default function ActivityCard() {
  return (
    <div className="space-y-8">
      <EntityList
        title="Activity"
        items={activities}
        action={{ label: "See All" }}
        className="w-full p-8"
      />
      <EntityList
        title="Last Few Days"
        items={lastFewDays}
        className="w-full p-8"
      />
    </div>
  )
} 