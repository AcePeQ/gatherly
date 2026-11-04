import { useId, type ComponentPropsWithRef } from 'react';
import styles from './Checkbox.module.css';

// type CheckboxProps = {
//   label?: string;
//   ariaLabel?: string;
//   isChecked: boolean;
//   isDisabled?: boolean;
//   onChange: (isChecked: boolean) => void;
// }

type CheckboxProps = ComponentPropsWithRef<"input"> & {
  label: string;
  fontSizeRem?: number;
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  type?: "checkbox";
}

function Checkbox({ label, type = "checkbox", fontSizeRem = 1, fontWeight = 400, ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = props.id ?? generatedId
  const inputClassName = [
    styles.checkboxInput,
    props.className
  ].filter(Boolean).join(" ")

  return (
    <label style={{ fontSize: `${fontSizeRem}rem`, fontWeight }} className={styles.checkboxContainer} htmlFor={inputId}>
      <input
        {...props}
        className={inputClassName}
        id={inputId}
        type={type}
      />
      {label && label}
    </label>
  )
}

export default Checkbox
