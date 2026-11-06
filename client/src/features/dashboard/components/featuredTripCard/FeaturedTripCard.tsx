import ButtonLink from '../../../../components/link/ButtonLink';
import type { FeaturedTripCardProps } from '../../../../utils/featuredTripCardMock';
import styles from './FeaturedTripCard.module.css';
import { FiUsers } from "react-icons/fi";

import TripDateRange from '../../../../components/tripDateRange/TripDateRange';
import { FaMapMarkerAlt } from 'react-icons/fa';

function FeaturedTripCard({ image, badge, place, cardTitle, startDate, endDate, persons, path }: FeaturedTripCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt='' />
        <span className={styles.badge}>{badge || "upcoming"}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <hgroup className={styles.cardTitleWrapper}>
            <h2 className={styles.cardTitle}>{cardTitle}</h2>
            <p className={styles.cardSubtitle}>Your next adventure</p>
          </hgroup>

          <div className={styles.details}>
            <p className={styles.place}>
              <FaMapMarkerAlt />
              {place}
            </p>
            <p className={styles.travelers}>
              <FiUsers aria-hidden="true" focusable="false" />
              {persons}
            </p>
            <TripDateRange startDate={startDate} endDate={endDate} />
          </div>

          <ButtonLink className={styles.viewTripBtn} variant="secondary" to={path}>
            View trip
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}

export default FeaturedTripCard
