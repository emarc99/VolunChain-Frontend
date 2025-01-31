import ActivityCard from "./ActivityCard"
import SuggestionsCard from "./SuggestionsCard"

export default function ActivitySidebar() {
  return (
    <div className="space-y-8">
      <ActivityCard />
      <SuggestionsCard />
    </div>
  )
}

