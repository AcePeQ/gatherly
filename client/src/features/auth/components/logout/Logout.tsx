import { toast } from 'react-toastify';
import { useLogout } from '../../api/useLogout';
import { useAuthStore } from '../../stores/useAuthStore';
import styles from './Logout.module.css';

import { CiLogout } from "react-icons/ci";

function Logout() {
  const { isPending, logoutFn } = useLogout()
  const user = useAuthStore(state => state.user);

  function handleClick() {
    logoutFn(undefined, {
      onSettled: (res, error) => {
        toast.info(error?.message ?? res?.message);
      }
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <p className={styles.name}>{user?.name}</p>
        <p className={styles.email}>{user?.email}</p>
      </div>

      <button onClick={handleClick} disabled={isPending} className={styles.logoutButton}>
        <span aria-hidden="true">
          <CiLogout />
        </span>
        <span className='sr-only'>{isPending ? "Logging out" : "Logout"}</span>
      </button>
    </div>
  )
}

export default Logout