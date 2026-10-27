import { Link } from 'react-router';
import ButtonLink from '../../../../components/link/ButtonLink';
import type { FeaturedTripCardProps } from '../../../../utils/featuredTripCardMock';
import styles from './FeaturedTripCard.module.css';
import { CiCalendar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { formatDate, formatDateRange } from '../../../../utils/dateFormatters';

type TripDateRangeProps = {
  startDate: string;
  endDate: string;
}

function TripDateRange({ startDate, endDate }: TripDateRangeProps) {
  return (
    <p className={styles.date}>
      <CiCalendar aria-hidden="true" focusable="false" />
      <span aria-hidden="true">{formatDateRange(startDate, endDate)}</span>
      <span className="sr-only">
        <time dateTime={startDate}>{formatDate(startDate)}</time>
        {' to '}
        <time dateTime={endDate}>{formatDate(endDate)}</time>
      </span>
    </p>
  )
}

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
        {isButton && path &&
          <ButtonLink variant="primary" to={path}>
            View trip
          </ButtonLink>
        }
      </div>
    </article>
  )
}

export default FeaturedTripCard
