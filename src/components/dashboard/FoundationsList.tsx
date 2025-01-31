import EntityList  from "@/components/ui/EntityList"

const foundations = [
  {
    image: "/placeholders/foundation-image.svg",
    title: "ArkSpace",
    subtitle: "Social services for people",
    action: {
      type: 'link' as const,
      label: "Check Out"
    }
  },
  {
    image: "/placeholders/foundation-image.svg",
    title: "Optima Inc",
    subtitle: "Charity work & education",
    action: {
      type: 'link' as const,
      label: "Check Out"
    }
  },
  {
    image: "/placeholders/foundation-image.svg",
    title: "Duty & Quality",
    subtitle: "Builders of homes",
    action: {
      type: 'link' as const,
      label: "Check Out"
    }
  },
  {
    image: "/placeholders/foundation-image.svg",
    title: "Martyr Co",
    subtitle: "Clean energy providers",
    action: {
      type: 'link' as const,
      label: "Check Out"
    }
  },
  {
    image: "/placeholders/foundation-image.svg",
    title: "High Tech",
    subtitle: "Technology for everyone",
    action: {
      type: 'link' as const,
      label: "Check Out"
    }
  },
  {
    image: "/placeholders/foundation-image.svg",
    title: "PaperFlights",
    subtitle: "Travelers & helpers",
    action: {
      type: 'link' as const,
      label: "Check Out"
    }
  },
]

export default function FoundationsList() {
  return (
    <EntityList
      title="Foundations"
      items={foundations}
      action={{ label: "See All" }}
      className="mt-8 w-full p-8"
    />
  )
}

