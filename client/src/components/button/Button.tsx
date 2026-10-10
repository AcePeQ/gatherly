import type { MouseEventHandler, ReactElement } from 'react';
import styles from './Button.module.css';
import ContainerLoader from '../loaders/containerLoader/ContainerLoader';

type ButtonProps = {
  children: ReactElement | string;
  clickType?: "submit" | "button" | "reset"
  isDisabled?: boolean;
  isLoading?: boolean;
  type: "primary" | "secondary" | "ghost" | "link";
  onClick?: MouseEventHandler;
}
function Button({ children, type, clickType = "button", isDisabled = false, isLoading = false, onClick }: ButtonProps) {
  return (
    <button
      disabled={isDisabled || isLoading}
      type={clickType}
      className={`${styles.btn} ${styles[type]}`}
      onClick={onClick}
      aria-busy={isLoading}
    >
      <span className={`${styles.content} ${isLoading ? styles.contentLoading : ""}`}>
        {children}
      </span>

      {isLoading && (
        <span className={styles.loader}>
          <ContainerLoader label="Loading" />
        </span>
      )}
    </button>
  )
}

export default Button
