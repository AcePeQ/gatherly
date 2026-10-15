import DashboardHeader from "../../../features/dashboard/components/dashboardHeader/DashboardHeader"
import FeaturedTripCard from "../../../features/dashboard/components/featuredTripCard/FeaturedTripCard"
import MyTasksPreview from "../../../features/dashboard/components/myTasksPreview/MyTasksPreview"

function Dashboard() {
  return (
    <section className="wrapper-padding">
      <DashboardHeader />

      <FeaturedTripCard />
      <MyTasksPreview />
    </section>
  )
}

export default Dashboard
