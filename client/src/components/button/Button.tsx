import type { MouseEventHandler, ReactElement } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: ReactElement | string;
  clickType?: "submit" | "button" | "reset"
  isDisabled?: boolean;
  type: "primary" | "secondary" | "ghost" | "link";
  onClick?: MouseEventHandler;
}
function Button({ children, type, clickType = "button", isDisabled = false, onClick }: ButtonProps) {
  return (
    <button disabled={isDisabled} type={clickType} className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>
  )
}

export default Button