import { useAuthStore } from '../../../auth/stores/useAuthStore';
import ButtonLink from '../../../../components/link/ButtonLink';
import styles from './DashboardHeader.module.css';

function DashboardHeader() {
  const user = useAuthStore(state => state.user);

  const name = user?.name.split(" ")[0];

  return (
    <header className={styles.header}>
      <div className={styles.infoWrapper}>
        <h1 className={styles.title}>Hi, {name}</h1>
        <p className={styles.text}>Your next adventure, all in one place.</p>
      </div>

      <ButtonLink variant="primary" to="/trips/create-trip">
        Create trip
      </ButtonLink>
    </header>
  )
}

export default DashboardHeader
