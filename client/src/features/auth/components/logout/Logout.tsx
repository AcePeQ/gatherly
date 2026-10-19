import { toast } from 'react-toastify';
import { useLogout } from '../../api/useLogout';
import { useAuthStore } from '../../stores/useAuthStore';
import styles from './Logout.module.css';

import { CiLogout } from "react-icons/ci";
import { useQueryClient } from '@tanstack/react-query';
import { AUTH_SESSION_QUERY_KEY } from '../../constants/authQueryKeys';

function Logout() {
  const { isPending, logoutFn } = useLogout()
  const queryClient = useQueryClient();
  const user = useAuthStore(state => state.user);

  function handleClick() {
    logoutFn(undefined, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: AUTH_SESSION_QUERY_KEY })
        toast.success(data.message);
      },
      onError: (error) => {
        toast.error(error.message)
      }
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <p className={styles.name}>{user?.name}</p>
        <p className={styles.email}>{user?.email}</p>
      </div>

      <button type='button' onClick={handleClick} disabled={isPending} className={styles.logoutButton}>
        <span aria-hidden="true">
          <CiLogout />
        </span>
        <span className='sr-only'>{isPending ? "Logging out" : "Logout"}</span>
      </button>
    </div>
  )
}

export default Logout