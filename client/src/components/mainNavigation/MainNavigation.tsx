import styles from './MainNavigation.module.css';

import { mainNavigation } from "../../utils/constants"
import NavigationDropdown from "../navigationDropdown/NavigationDropdown"
import NavigationLink from "../navigationLink/NavigationLink"

function MainNavigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {mainNavigation.map(navigationItem => navigationItem.type === "link"
          ? <NavigationLink type={navigationItem.type} label={navigationItem.label} path={navigationItem.path} icon={navigationItem.icon} />
          : <NavigationDropdown type={navigationItem.type} label={navigationItem.label} children={navigationItem.children} icon={navigationItem.icon} />)}
      </ul>
    </nav>
  )
}

export default MainNavigation