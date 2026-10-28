import { useId, useState, type ComponentPropsWithRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import styles from "./PasswordField.module.css";

type PasswordFieldProps = ComponentPropsWithRef<"input"> & {
  label: string;
  error?: string;
};

function PasswordField({ label, error, ...props }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const generatedId = useId();
  const inputId = props.id ?? generatedId;
  const errorId = `${inputId}-error`;
  const describedBy = [
    props["aria-describedby"],
    error ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  function handleTogglePassword() {
    setShowPassword((previousStatus) => !previousStatus);
  }

  const inputClassName = [props.className, styles.inputWithAction]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.row}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>

      <div className={styles.inputWrapper}>
        <input
          {...props}
          id={inputId}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          type={showPassword ? "text" : "password"}
          className={inputClassName}
        />

        <button
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          aria-controls={inputId}
          onClick={handleTogglePassword}
          className={styles.iconWrapper}
          disabled={props.disabled}
        >
          {showPassword ? (
            <FaEyeSlash aria-hidden="true" />
          ) : (
            <FaEye aria-hidden="true" />
          )}
        </button>
      </div>

      {error && (
        <p className={styles.error} id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default PasswordField;
