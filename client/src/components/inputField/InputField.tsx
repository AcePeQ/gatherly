import { useId, type ComponentPropsWithRef } from "react";

import styles from "./InputField.module.css";

type InputFieldProps = ComponentPropsWithRef<"input"> & {
  label: string;
  error?: string;
};

function InputField({ label, error, ...props }: InputFieldProps) {
  const generatedId = useId();
  const inputId = props.id ?? generatedId;
  const errorId = `${inputId}-error`;
  const describedBy = [
    props["aria-describedby"],
    error ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div className={styles.row}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>

      <input
        {...props}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
      />

      {error && (
        <p className={styles.error} id={errorId} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
