import { NavLink } from 'react-router';
import styles from './NavigationLink.module.css';
import type { NavigationLinkItem } from '../../types/navigation';



function NavigationLink({ icon, path, label, end }: NavigationLinkItem) {
  const Icon = icon;
  const isSettingsLink = path === "/settings";

  return (
    <li className={`${styles.linkItem} ${isSettingsLink ? styles.settingsLink : ""}`}>
      <NavLink end={end} className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.activeLink : ""}`
      } to={path}>
        {Icon &&
          <span aria-hidden="true" className={styles.iconWrapper}><Icon /></span>
        }
        {label}
      </NavLink>
    </li>
  )
}

export default NavigationLink