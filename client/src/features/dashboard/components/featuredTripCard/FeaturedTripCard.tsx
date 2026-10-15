import ButtonLink from '../../../../components/link/ButtonLink';
import styles from './FeaturedTripCard.module.css';

import PlaceholderImg from "../../../../assets/images/featureCardPlaceholder.jpg"

function FeaturedTripCard() {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>Upcoming trip</h2>

      <div className={styles.previewImageWrapper}>
        <img className={styles.previewImage} src={PlaceholderImg} alt='' />
        <span className={styles.previewImageBadge}>In 9 days</span>
      </div>

      <div className={styles.informationWrapper}>
        <div className={styles.informationLeft}>
          <h3 className={styles.cardTitle}>Weekend in Gdansk</h3>

          <div className={styles.moreInfo}>
            <p className={styles.date}>23-25 Oct 2026</p>
            <p className={styles.persons}>4 travelers</p>
          </div>
        </div>
        <ButtonLink type='primary' path='/trips/current-trip'>View trip</ButtonLink>
      </div>

    </article>
  )
}

export default FeaturedTripCard