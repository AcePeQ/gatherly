import { Link } from 'react-router';
import ButtonLink from '../../../../components/link/ButtonLink';
import type { FeaturedTripCardProps } from '../../../../utils/featuredTripCardMock';
import styles from './FeaturedTripCard.module.css';
import { CiCalendar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";



function FeaturedTripCard({ title, image, badge, cardTitle, date, persons, isButton, path }: FeaturedTripCardProps) {
  if (!isButton && path) {
    return (
      <article>
        <Link className={styles.card} to={path}>
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
                <p className={styles.date}>
                  <CiCalendar />
                  {date}
                </p>
                <p className={styles.persons}>
                  <FiUsers />
                  {persons}
                </p>
              </div>
            </div>
            <span className={styles.chevronRight}>
              <FiChevronRight />
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
            <p className={styles.date}>
              <CiCalendar />
              {date}
            </p>
            <p className={styles.persons}>
              <FiUsers />
              {persons}
            </p>
          </div>
        </div>
        {isButton && path &&
          <ButtonLink type='primary' path={path}>View trip</ButtonLink>
        }
      </div>
    </article>
  )
}

export default FeaturedTripCard