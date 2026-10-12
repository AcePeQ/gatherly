import styles from './Sidebar.module.css';

import Logo from "../../assets/images/icons/whiteLogoFull.png"
import MainNavigation from '../mainNavigation/MainNavigation';
import Logout from '../../features/auth/components/logout/Logout';

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={Logo} alt='' />
      <MainNavigation />
      <Logout />
    </div>
  )
}

export default Sidebar