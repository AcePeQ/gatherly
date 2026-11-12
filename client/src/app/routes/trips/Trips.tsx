import ButtonLink from "../../../components/link/ButtonLink";
import TripsGallery from "../../../features/trips/components/tripsGallery/TripsGallery";

import styles from "./Trips.module.css";

function Trips() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>My trips</h1>
          <p className={styles.text}>
            Big adventures and little weekend escapes.
          </p>
        </div>

        <ButtonLink variant="primary" to="/dashboard/trips/create">
          Create trip
        </ButtonLink>
      </header>

      <TripsGallery />
    </div>
  );
}

export default Trips;
