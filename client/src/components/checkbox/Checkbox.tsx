import styles from './Checkbox.module.css';

type CheckboxProps = {
  label?: string;
  ariaLabel?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  onChange: (isChecked: boolean) => void;
}

function Checkbox({ label, ariaLabel, isChecked, isDisabled = false, onChange }: CheckboxProps) {
  return (
    <label className={styles.checkboxContainer}>
      <input
        aria-label={ariaLabel}
        disabled={isDisabled}
        checked={isChecked}
        onChange={(event) => onChange(event.currentTarget.checked)}
        className={styles.checkboxInput}
        type="checkbox"
      />
      {label && label}
    </label>
  )
}

export default Checkbox
