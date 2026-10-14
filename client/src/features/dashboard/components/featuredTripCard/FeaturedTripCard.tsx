import ButtonLink from '../../../../components/link/ButtonLink';
import styles from './FeaturedTripCard.module.css';

function FeaturedTripCard() {
  return (
    <article className={styles.card}>
      <p>Upcoming trip</p>

      <div className={styles.previewImageWrapper}>
        <img className={styles.previewImage} src='' alt='' />
        <span className={styles.previewImageBadge}>In 9 days</span>
      </div>

      <div className={styles.informationWrapper}>
        <div className={styles.informationLeft}>
          <h2 className={styles.cardTitle}>Weekend in Gdansk</h2>

          <div className={styles.moreInfo}>
            <p className={styles.date}>23-25 Oct 2026</p>
            <p className={styles.persons}>4 travelers</p>
          </div>

          <ButtonLink type='primary' path='/trips/current-trip'>View trip</ButtonLink>
        </div>
      </div>

    </article>
  )
}

export default FeaturedTripCard