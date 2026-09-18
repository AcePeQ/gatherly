import type { MouseEventHandler, ReactElement } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactElement | string;
  clickType?: "submit" | "button" | "reset"
  type: "primary" | "secondary" | "ghost" | "link";
  onClick?: MouseEventHandler;
}
function Button({ children, type, clickType = "button", onClick }: ButtonProps) {
  return (
    <button type={clickType} className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>
  )
}

export default Button