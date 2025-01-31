import FeedPost from "@/components/dashboard/FeedPost"

type FeedPostProps = {
  organization: {
    name: string
    handle: string
    avatar: string
  }
  content: {
    title: string
    body: string
    image?: string
  }
  engagement: {
    likes: string
    comments: boolean
  }
  tags: {
    label: string
    color: string
  }[]
}

const posts: FeedPostProps[] = [
  {
    organization: {
      name: "Dog Goods for Good Dogs",
      handle: "dog_goods",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: {
      title: "Join us this week for a great experience with the doggos!",
      body: "We will be giving food to them and raising money for the cause this weekend.",
      image: "/assets/dashboard/post-2.png",
    },
    engagement: {
      likes: "23.1k",
      comments: true,
    },
    tags: [
      { label: "Social Services", color: "bg-blue-500/10 text-blue-500" },
      { label: "Animal Welfare", color: "bg-green-500/10 text-green-500" },
    ],
  },
  {
    organization: {
      name: "Food Bank Network",
      handle: "foodbank_net",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: {
      title: "Thanks to our amazing volunteers!",
      body: "We distributed over 1000 meals this week! Looking for more helping hands for our upcoming food drive. 🥘 #FoodBank #Community",
    },
    engagement: {
      likes: "15.4k",
      comments: true,
    },
    tags: [
      { label: "Food Security", color: "bg-orange-500/10 text-orange-500" },
      { label: "Community Help", color: "bg-purple-500/10 text-purple-500" },
    ],
  },
  {
    organization: {
      name: "Green Earth Alliance",
      handle: "greenearth",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: {
      title: "Plant a tree, plant hope!",
      body: "Join our reforestation project this month. Every tree counts in our fight against climate change. 🌱 #Sustainability",
      image: "/assets/dashboard/post-1.png",
    },
    engagement: {
      likes: "19.2k",
      comments: true,
    },
    tags: [{ 
      label: "Environmental", 
      color: "bg-green-500/10 text-green-500" 
    }],
  },
]

export default function Feed() {
  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <FeedPost key={index} {...post} />
      ))}
    </div>
  )
}

