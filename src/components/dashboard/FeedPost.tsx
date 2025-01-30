import Image from "next/image"
import { MoreVertical, MessageSquare, Heart } from "lucide-react"
import Card from "../ui/Card"

interface PostTag {
  label: string
  color: string
}

interface FeedPostProps {
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
    comments?: boolean
  }
  tags: PostTag[]
}

export default function FeedPost({ organization, content, engagement, tags }: FeedPostProps) {
  return (
    <Card className="rounded-xl bg-gray-800/20 p-8">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full">
            <Image
              src={organization.avatar || "/placeholders/profile-image.png"}
              alt={organization.name}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-link cursor-pointer text-base md:text-lg">{organization.name}</h2>
            <p className="text-md font-light text-gray-400">@{organization.handle}</p>
          </div>
        </div>
        <button type="button" className="rounded-full p-2 hover:bg-gray-800">
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </button>
      </div>

      <h2 className="text-lg md:text-xl font-semibold mb-2">{content.title}</h2>
      <p className="mb-3 text-gray-300">{content.body}</p>

      {content.image && (
        <div className="overflow-hidden rounded-xl">
          <Image
            src={content.image}
            alt=""
            width={600}
            height={300}
            className="w-full object-cover"
          />
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button type="button" className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500">
            <Heart className="h-5 w-5" />
            <span>{engagement.likes}</span>
          </button>
          {engagement.comments && (
            <button type="button" className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300">
              <MessageSquare className="h-5 w-5" />
              <span>Comments</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.label} className={`rounded-full ${tag.color} px-3 py-1 text-xs font-medium`}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}

