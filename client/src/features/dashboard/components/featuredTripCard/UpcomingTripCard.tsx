import { FaMapMarkerAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router";

import TripDateRange from "../../../../components/tripDateRange/TripDateRange";
import type { TripPreview } from "../../types/tripPreview";
import {
  formatTravelersCount,
  getTripTimingLabel,
} from "../../utils/tripPreviewFormatters";

import styles from "./FeaturedTripCard.module.css";

function UpcomingTripCard({
  id,
  imageUrl,
  place,
  title,
  startDate,
  endDate,
  travelersCount,
}: TripPreview) {
  const timingLabel = getTripTimingLabel(startDate, endDate);

  return (
    <article className={`${styles.card} ${styles.upcomingCard}`}>
      <Link className={styles.cardLink} to={`/trips/${id}`}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={imageUrl} alt="" />
          <span className={styles.badge}>{timingLabel}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h3 className={styles.cardTitle}>{title}</h3>

            <div className={styles.details}>
              <p className={styles.place}>
                <FaMapMarkerAlt aria-hidden="true" focusable="false" />
                {place}
              </p>
              <p className={styles.travelers}>
                <FiUsers aria-hidden="true" focusable="false" />
                {formatTravelersCount(travelersCount)}
              </p>
              <TripDateRange startDate={startDate} endDate={endDate} />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default UpcomingTripCard;
