import { useId, type ComponentPropsWithRef } from "react";

import styles from "./InputField.module.css";

type InputFieldProps = ComponentPropsWithRef<"input"> & {
  label: string;
  error?: string;
};

function InputField({ label, error, ...props }: InputFieldProps) {
  const generatedId = useId();
  const inputId = props.id ?? generatedId;

  return (
    <div className={styles.row}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>

      <input
        {...props}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
      />

      {error && (
        <p className={styles.error} id={`${inputId}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
