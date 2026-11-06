import { FaMapMarkerAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";

import ButtonLink from "../../../../components/link/ButtonLink";
import TripDateRange from "../../../../components/tripDateRange/TripDateRange";
import type { TripPreview } from "../../types/tripPreview";
import {
  formatTravelersCount,
  getTripTimingLabel,
} from "../../utils/tripPreviewFormatters";

import styles from "./FeaturedTripCard.module.css";

function FeaturedTripCard({
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
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={imageUrl} alt="" />
        <span className={styles.badge}>{timingLabel}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <hgroup className={styles.cardTitleWrapper}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardSubtitle}>Your next adventure</p>
          </hgroup>

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

          <ButtonLink
            className={styles.viewTripBtn}
            variant="secondary"
            to={`/trips/${id}`}
          >
            View trip
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

export default FeaturedTripCard;
