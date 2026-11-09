import TripsSearch from '../tripsSearch/TripsSearch';
import styles from './TripsGallery.module.css';

function TripsGallery() {
  return (
    <section className={styles.tripsSection}>
      <TripsSearch />

    </section>
  )
}

export default TripsGallery