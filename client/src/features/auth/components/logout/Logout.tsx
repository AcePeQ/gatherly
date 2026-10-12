import styles from './Logout.module.css';

import { CiLogout } from "react-icons/ci";

function Logout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <p className={styles.name}>Name</p>
        <p className={styles.email}>Email</p>
      </div>

      <button className={styles.logoutButton}>
        <CiLogout />
        <span className='sr-only'>Logout</span>
      </button>
    </div>
  )
}

export default Logout