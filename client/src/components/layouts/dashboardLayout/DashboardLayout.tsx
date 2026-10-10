import styles from './DashboardLayout.module.css';
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div className={styles.wrapper}>

      <Outlet />
    </div>
  )
}

export default DashboardLayout