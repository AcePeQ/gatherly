import styles from './Sidebar.module.css';

import Logo from "../../../assets/images/icons/whiteLogoFull.png"

function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={Logo} alt='' />
    </div>
  )
}

export default Sidebar