import DashboardHeader from "../../../features/dashboard/components/dashboardHeader/DashboardHeader"
import FeaturedTripCard from "../../../features/dashboard/components/featuredTripCard/FeaturedTripCard"
import MyTasksPreview from "../../../features/dashboard/components/myTasksPreview/MyTasksPreview"
import UpcomingTrips from "../../../features/dashboard/components/upcomingTrips/UpcomingTrips"
import { PlaceholderCard1 } from "../../../utils/featuredTripCardMock"
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <section className={`${styles.section} wrapper-padding`}>
      <DashboardHeader />

      <FeaturedTripCard {...PlaceholderCard1} />
      <MyTasksPreview />
      <UpcomingTrips />
    </section>
  )
}

export default Dashboard
