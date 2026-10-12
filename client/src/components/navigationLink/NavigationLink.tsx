import { NavLink } from 'react-router';
import styles from './NavigationLink.module.css';
import type { NavigationLinkItem } from '../../types/navigation';



function NavigationLink({ icon, path, label }: NavigationLinkItem) {
  const Icon = icon;

  return (
    <li className={styles.linkItem}>
      <NavLink className={styles.link} to={path}>
        {Icon &&
          <span className={styles.iconWrapper}><Icon /></span>
        }
        {label}
      </NavLink>
    </li>
  )
}

export default NavigationLink