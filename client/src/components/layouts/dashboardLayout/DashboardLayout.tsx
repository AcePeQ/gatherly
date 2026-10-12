import Sidebar from '../../sidebar/Sidebar';
import styles from './DashboardLayout.module.css';
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div className={`${styles.wrapper} container`}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default DashboardLayout