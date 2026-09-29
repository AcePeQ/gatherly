import type { ReactElement } from 'react';
import styles from './Link.module.css';

import { Link as RouterLink } from "react-router";

type LinkProps = {
  children: ReactElement | string;
  path: string;
}

function Link({ children, path }: LinkProps) {
  return (
    <RouterLink className={styles.link} to={path}>{children}</RouterLink>
  )
}

export default Link