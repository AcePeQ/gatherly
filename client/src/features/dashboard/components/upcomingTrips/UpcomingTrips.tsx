import AppLink from "../../../../components/link/AppLink";
import { upcomingTripsMock } from "../../mocks/tripPreviews";
import UpcomingTripCard from "../featuredTripCard/UpcomingTripCard";

import styles from "./UpcomingTrips.module.css";

function UpcomingTrips() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>More upcoming trips</h2>
        <AppLink to="/trips">View all trips</AppLink>
      </header>

      <ul className={styles.list}>
        {upcomingTripsMock.map((trip) => (
          <li className={styles.listItem} key={trip.id}>
            <UpcomingTripCard {...trip} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UpcomingTrips;
