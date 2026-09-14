import type { MouseEventHandler, ReactElement } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactElement | string;
  type: "primary" | "secondary" | "ghost";
  onClick: MouseEventHandler;
}
function Button({ children, type, onClick }: ButtonProps) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>
  )
}

export default Button