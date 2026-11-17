import homepageBackground from "../../../../assets/images/backgrounds/homepageBg.png";

import styles from "./TripOverview.module.css";

function TripOverview() {
  return (
    <div className={styles.wrapper}>
      <figure className={styles.tripImageWrapper}>
        <img
          className={styles.tripImage}
          alt=""
          src={homepageBackground}
        />
      </figure>

      <div className={styles.tripDetails}>
        <h3 className="sr-only">Trip details</h3>

        <p className={styles.tripDetail}>
          <span className={styles.tripDetailValue}>3</span>
          <span className={styles.tripDetailText}>Days away</span>
        </p>

        <p className={styles.tripDetail}>
          <span className={styles.tripDetailValue}>4</span>
          <span className={styles.tripDetailText}>Travelers</span>
        </p>

        <p className={styles.tripDetail}>
          <span className={styles.tripDetailValue}>5 / 8</span>
          <span className={styles.tripDetailText}>Tasks done</span>
        </p>
      </div>

      <div className={styles.tripDescriptionWrapper}>
        <h3 className={styles.tripDescriptionTitle}>Trip description</h3>
        <p className={styles.tripDescriptionText}>
          Slow mornings, walks through the old town and dinner by the waterfront. A few days to
          explore together.
        </p>
      </div>
    </div>
  );
}

export default TripOverview;
