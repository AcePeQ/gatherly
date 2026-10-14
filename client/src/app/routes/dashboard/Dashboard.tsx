import DashboardHeader from "../../../features/dashboard/components/dashboardHeader/DashboardHeader"
import FeaturedTripCard from "../../../features/dashboard/components/featuredTripCard/FeaturedTripCard"

function Dashboard() {
  return (
    <section className="wrapper-padding">
      <DashboardHeader />

      <FeaturedTripCard />
    </section>
  )
}

export default Dashboard
