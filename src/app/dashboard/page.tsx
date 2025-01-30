import DashboardNav from "@/components/dashboard/DashboardNav"
import ProfileSidebar from "@/components/dashboard/ProfileSideBar"
import ActivitySidebar from "@/components/dashboard/ActivitySideBar"
import Feed from "@/components/dashboard/Feed"

export default function Home() {
  return (
    <>
      <DashboardNav />
      <div className="container mx-auto pt-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[300px_1fr] xl:grid-cols-[384px_1fr_384px] gap-8">
          <aside className="hidden lg:block sticky top-20">
            <ProfileSidebar />
          </aside>
          <div className="min-h-screen">
            <Feed />
          </div>
          <aside className="hidden xl:block sticky top-20">
            <ActivitySidebar />
          </aside>
        </div>
      </div>
    </>
  )
}
