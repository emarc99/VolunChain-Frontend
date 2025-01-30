import EntityList from "@/components/ui/EntityList"

const suggestions = [
  {
    image: "/placeholder.svg?height=40&width=40",
    title: "DripFishes",
    subtitle: "Ocean cleaning services",
    action: {
      type: 'link' as const,
      label: "Check Out"
    }
  },
  {
    image: "/placeholder.svg?height=40&width=40",
    title: "Black Bear Association",
    subtitle: "Environmental Cleanup",
    action: {
      type: 'link' as const,
      label: "Check Out"
    }
  },
  {
    image: "/placeholder.svg?height=40&width=40",
    title: "Green Earth Initiative",
    subtitle: "Sustainable living advocacy",
    action: {
      type: 'link' as const,
      label: "Check Out"
    }
  },
]

export default function SuggestionsCard() {
  return (
    <EntityList
      title="Suggested for you"
      items={suggestions}
      action={{ label: "See All" }}
      className="w-full p-8"
    />
  )
} 