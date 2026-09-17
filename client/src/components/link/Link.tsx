import type { ReactElement } from 'react';
import styles from './Link.module.css';

import { Link as ReactLink } from "react-router";

type LinkProps = {
  children: ReactElement | string;
  path: string;
}

function Link({ children, path }: LinkProps) {
  return (
    <ReactLink className={styles.link} to={path}>{children}</ReactLink>
  )
}

export default Link