import type { ComponentPropsWithoutRef } from "react";

import ContainerLoader from "../loaders/containerLoader/ContainerLoader";

import actionStyles from "../Action.module.css";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant: ButtonVariant;
  isLoading?: boolean;
};

function Button({
  children,
  variant,
  type = "button",
  disabled = false,
  isLoading = false,
  className,
  ...buttonProps
}: ButtonProps) {
  const isButtonDisabled = disabled || isLoading;
  const variantClassName =
    variant === "link" ? styles.link : actionStyles[variant];
  const buttonClassName = [
    actionStyles.action,
    styles.button,
    variantClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...buttonProps}
      type={type}
      disabled={isButtonDisabled}
      className={buttonClassName}
      aria-busy={isLoading || undefined}
    >
      <span className={`${styles.content} ${isLoading ? styles.contentLoading : ""}`}>
        {children}
      </span>

      {isLoading && (
        <span className={styles.loader} aria-hidden="true">
          <ContainerLoader />
        </span>
      )}
    </button>
  );
}

export default Button;
