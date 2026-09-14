import { Link } from 'react-router';
import styles from './Link.module.css';
import type { ReactElement } from 'react';

type ButtonLinkProps = {
  children: ReactElement | string;
  type: "primary" | "secondary" | "ghost";
  path: string;
}

function ButtonLink({ children, type, path }: ButtonLinkProps) {
  return (
    <Link className={`${styles.btnLink} ${styles[type]}`} to={path}>{children}</Link>
  )
}

export default ButtonLink