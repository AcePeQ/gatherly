import { useId, type ComponentPropsWithRef } from "react";

import styles from './TextareaField.module.css';

type TextareaFieldProps = ComponentPropsWithRef<"textarea"> & {
  label: string;
  error?: string;
};

function TextareaField({ label, error, ...props }: TextareaFieldProps) {
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

      <textarea
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

export default TextareaField;
