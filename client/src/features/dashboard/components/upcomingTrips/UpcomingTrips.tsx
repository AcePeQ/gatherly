import AppLink from '../../../../components/link/AppLink';
import { PlaceholderCard1 } from '../../../../utils/featuredTripCardMock';
import FeaturedTripCardLink from '../featuredTripCard/FeaturedTripCardLink';
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
          <FeaturedTripCardLink {...PlaceholderCard1} isFeaturedCard={false} />
        </li>
        <li className={styles.listItem}>
          <FeaturedTripCardLink {...PlaceholderCard1} isFeaturedCard={false} />
        </li>
      </ul>
    </section>
  )
}

export default UpcomingTrips
