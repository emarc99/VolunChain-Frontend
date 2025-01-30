import Image from "next/image"
import Link from "next/link"
import Card from "../ui/Card"
import CardHeader from "../ui/CardHeader"

interface Activity {
  image: string
  text: string
  time: string
  action?: {
    type: 'link' | 'image'
    href?: string
    image?: string
  }
}

const activities: Activity[] = [
  {
    image: "/placeholder.svg?height=40&width=40",
    text: "You have gotten a new NFT!",
    time: "1m",
    action: {
      type: 'image',
      image: "/assets/dashboard/nft.png"
    }
  },
  {
    image: "/placeholder.svg?height=40&width=40",
    text: "DripFishes has a new volunteering",
    time: "15m",
    action: {
      type: 'link',
      href: '/volunteering'
    }
  },
]

const lastFewDays: Activity[] = [
  {
    image: "/placeholder.svg?height=40&width=40",
    text: "You have gotten a new NFT!",
    time: "6h",
    action: {
      type: 'image',
      image: "/assets/dashboard/nft.png"
    }
  },
  {
    image: "/placeholder.svg?height=40&width=40",
    text: "You received a new NFT!",
    time: "1d",
    action: {
      type: 'image',
      image: "/assets/dashboard/nft.png"
    }
  },
  {
    image: "/placeholder.svg?height=40&width=40",
    text: "OceanAid has a new volunteering",
    time: "2d",
    action: {
      type: 'link',
      href: '/volunteering'
    }
  },
]

function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={activity.image}
        alt="Profile"
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex-1">
        <p className="text-sm">{activity.text}</p>
        <p className="text-xs text-gray-400">{activity.time}</p>
      </div>
      {activity.action?.type === 'image' ? (
        <div className="h-10 w-10">
          <Image
            src={activity.action.image!}
            alt=""
            width={40}
            height={40}
            className="rounded-lg"
          />
        </div>
      ) : (
        <Link 
          href={activity.action?.href || '#'} 
          className="text-[#2D9CDB] text-sm hover:underline"
        >
          Check Out
        </Link>
      )}
    </div>
  )
}

export default function ActivityCard() {
  return (
    <Card className="w-full p-8">
      {/* Recent Activity */}
      <div className="mb-10">
        <CardHeader 
          title="Activity" 
          action={{ label: "See All" }} 
        />
        <div className="space-y-8">
          {activities.map((activity, i) => (
            <ActivityItem key={i} activity={activity} />
          ))}
        </div>
      </div>

      {/* Last Few Days */}
      <div>
        <CardHeader title="Last Few Days" />
        <div className="space-y-8">
          {lastFewDays.map((activity, i) => (
            <ActivityItem key={i} activity={activity} />
          ))}
        </div>
      </div>
    </Card>
  )
} 