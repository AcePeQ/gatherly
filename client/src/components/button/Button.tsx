import type { MouseEventHandler, ReactElement } from "react";

import ContainerLoader from "../loaders/containerLoader/ContainerLoader";

import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactElement | string;
  type?: "submit" | "button" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  variant: "primary" | "secondary" | "ghost" | "link";
  onClick?: MouseEventHandler;
};

function Button({
  children,
  variant,
  type = "button",
  isDisabled = false,
  isLoading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={isDisabled || isLoading}
      type={type}
      className={`${styles.btn} ${styles[variant]}`}
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
  );
}

export default Button;
