import styles from './Sidebar.module.css';

import Logo from "../../assets/images/icons/whiteLogoFull.png"
import MainNavigation from '../mainNavigation/MainNavigation';
import Logout from '../../features/auth/components/logout/Logout';
import { Link } from 'react-router';

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <Link to="/dashboard">
        <img className={styles.logo} src={Logo} alt='Gatherly' />
      </Link>
      <MainNavigation />
      <Logout />
    </div>
  )
}

export default Sidebar