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

      <div className={styles.tripDetailsWrapper}>
        <h3 className="sr-only">Trip details</h3>

        <dl className={styles.tripDetails}>
          <div className={styles.tripDetail}>
            <dt className={styles.tripDetailText}>Days until start</dt>
            <dd className={styles.tripDetailValue}>3</dd>
          </div>

          <div className={styles.tripDetail}>
            <dt className={styles.tripDetailText}>Travelers</dt>
            <dd className={styles.tripDetailValue}>4</dd>
          </div>

          <div className={styles.tripDetail}>
            <dt className={styles.tripDetailText}>Tasks done</dt>
            <dd
              className={styles.tripDetailValue}
              aria-label="5 of 8 tasks completed"
            >
              5 / 8
            </dd>
          </div>
        </dl>
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
