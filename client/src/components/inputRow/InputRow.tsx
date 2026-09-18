import styles from './Input.module.css';
import { useState, type ComponentPropsWithoutRef, type ReactElement } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";


type InputRowProps = {
  label: string;
  error: string;
  id: string;
  isPassword: boolean;
  children: ReactElement<ComponentPropsWithoutRef<"input">, "input">
}

function InputRow({ label, error, id, isPassword, children }: InputRowProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false)

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
            onClick={() => {
              setShowPassword(prev => !prev)
            }}
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