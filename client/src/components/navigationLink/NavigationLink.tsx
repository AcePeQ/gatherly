import { NavLink } from 'react-router';
import styles from './NavigationLink.module.css';
import type { ReactElement } from 'react';

type NavigationLinkProps = {
  icon?: ReactElement | null;
  path: string;
  children: ReactElement | string;
}

function NavigationLink({ icon = null, path, children }: NavigationLinkProps) {

  return (
    <li className={styles.linkItem}>
      <NavLink className={styles.link} to={path}>
        {icon &&
          <span className={styles.iconWrapper}>{icon}</span>
        }
        {children}
      </NavLink>
    </li>
  )
}

export default NavigationLink