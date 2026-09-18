import styles from './InputRow.module.css';
import { type ComponentPropsWithoutRef, type ReactElement } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";


type InputRowProps = {
  label: string;
  error?: string;
  id: string;
  isPassword?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  children: ReactElement<ComponentPropsWithoutRef<"input">, "input">
}

function InputRow({ label, error, id, isPassword, showPassword, onTogglePassword, children }: InputRowProps) {

  return (
    <div className={styles.row}>
      <label className={styles.label} htmlFor={id}>{label}</label>

      <div className={styles.inputWrapper}>
        {children}

        {isPassword && (
          <button
            type='button'
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-controls={id}
            onClick={onTogglePassword}
            className={styles.iconWrapper}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {error && (
        <p className={styles.error} id={`${id}-error`} role='alert'>
          {error}
        </p>
      )}
    </div>
  )
}

export default InputRow