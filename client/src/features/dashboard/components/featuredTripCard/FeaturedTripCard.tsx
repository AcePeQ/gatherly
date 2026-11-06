import { Link } from 'react-router';
import ButtonLink from '../../../../components/link/ButtonLink';
import type { FeaturedTripCardProps } from '../../../../utils/featuredTripCardMock';
import styles from './FeaturedTripCard.module.css';
import { FiUsers } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import TripDateRange from '../../../../components/tripDateRange/TripDateRange';

function FeaturedTripCard({ title, image, badge, cardTitle, startDate, endDate, persons, isButton, path }: FeaturedTripCardProps) {
  if (!isButton && path) {
    return (
      <article>
        <Link className={`${styles.card} ${styles.cardLink}`} to={path}>
          {title &&
            <h2 className={styles.title}>{title}</h2>
          }

          <div className={styles.previewImageWrapper}>
            <img className={styles.previewImage} src={image} alt='' />
            {badge &&
              <span className={styles.previewImageBadge}>{badge}</span>
            }
          </div>

          <div className={styles.informationWrapper}>
            <div className={styles.informationLeft}>
              <h3 className={styles.cardTitle}>{cardTitle}</h3>

              <div className={styles.moreInfo}>
                <TripDateRange startDate={startDate} endDate={endDate} />
                <p className={styles.persons}>
                  <FiUsers aria-hidden="true" focusable="false" />
                  {persons}
                </p>
              </div>
            </div>
            <span className={styles.chevronRight}>
              <FiChevronRight aria-hidden="true" focusable="false" />
            </span>
          </div>
        </Link>
      </article>
    )
  }


  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt='' />
        {badge &&
          <span className={styles.badge}>{badge}</span>
        }
      </div>

      <div className={styles.content}>
        <div className={styles.contentLeft}>

          <hgroup className={styles.cardTitleWrapper}>
            <h2 className={styles.cardTitle}>{cardTitle}</h2>
            <p className={styles.cardSubtitle}>Your next adventure</p>
          </hgroup>

          <div className={styles.details}>
            <TripDateRange startDate={startDate} endDate={endDate} />
            <p className={styles.travelers}>
              <FiUsers aria-hidden="true" focusable="false" />
              {persons}
            </p>
          </div>

          {isButton && path &&
            <ButtonLink variant="secondary" to={path}>
              View trip
            </ButtonLink>
          }
        </div>
      </div>
    </article>
  )
}

export default FeaturedTripCard
