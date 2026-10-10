import { NavLink } from 'react-router';
import styles from './NavigationLink.module.css';
import type { ReactElement } from 'react';

type NavigationLinkProps = {
  icon?: ReactElement | null;
  isDropdown?: boolean;
  count?: number | null;
  path: string;
  children: ReactElement | string;
}

function NavigationLink({ icon = null, isDropdown = false, count = null, path, children }: NavigationLinkProps) {
  if (isDropdown) {
    return (
      <div>Dropdown</div>
    )
  }

  return (
    <li className={styles.linkItem}>
      <NavLink className={styles.link} to={path}>
        {icon &&
          <span className={styles.iconWrapper}>{icon}</span>
        }
        {children}
        {count &&
          <span className={styles.count}>{count}</span>
        }
      </NavLink>
    </li>
  )
}

export default NavigationLink