import type { FeaturedTripCardProps } from '../../../../utils/featuredTripCardMock';
import styles from './FeaturedTripCard.module.css';
import { FiUsers } from "react-icons/fi";

import TripDateRange from '../../../../components/tripDateRange/TripDateRange';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

function FeaturedTripCardLink({ image, badge, place, cardTitle, startDate, endDate, persons, path, isFeaturedCard }: FeaturedTripCardProps) {
  return (
    <article className={`${styles.card} ${isFeaturedCard ? styles.featuredCard : styles.upcomingCard}`}>
      <Link className={styles.cardLink} to={path}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt='' />
          <span className={styles.badge}>{badge || "upcoming"}</span>
        </div>

        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <hgroup className={styles.cardTitleWrapper}>
              <h2 className={styles.cardTitle}>{cardTitle}</h2>
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
          </div>
        </div>
      </Link>
    </article>
  )
}

export default FeaturedTripCardLink
