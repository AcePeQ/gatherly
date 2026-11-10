import TripCard from "../../../../components/tripCard/TripCard";
import { upcomingTripsMock } from "../../mocks/tripPreviews";

import styles from "./UpcomingTrips.module.css";

function UpcomingTrips() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>More upcoming trips</h2>
      </header>

      <ul className={styles.list}>
        {upcomingTripsMock.map((trip) => (
          <li className={styles.listItem} key={trip.id}>
            <TripCard {...trip} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UpcomingTrips;
