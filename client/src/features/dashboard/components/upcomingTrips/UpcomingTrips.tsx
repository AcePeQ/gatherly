import AppLink from '../../../../components/link/AppLink';
import { PlaceholderCard2 } from '../../../../utils/featuredTripCardMock';
import FeaturedTripCard from '../featuredTripCard/FeaturedTripCard';
import styles from './UpcomingTrips.module.css';

function UpcomingTrips() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>More upcoming trips</h2>
        <AppLink to="/trips">View all trips</AppLink>
      </header>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <FeaturedTripCard {...PlaceholderCard2} />
        </li>
        <li className={styles.listItem}>
          <FeaturedTripCard {...PlaceholderCard2} />
        </li>
      </ul>
    </section>
  )
}

export default UpcomingTrips
