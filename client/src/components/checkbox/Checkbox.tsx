import styles from './Checkbox.module.css';

type CheckboxProps = {
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: () => void;
}

function Checkbox({ label, isChecked = false, isDisabled = false, onChange }: CheckboxProps) {
  return (
    <label className={styles.checkboxContainer}>
      <input disabled={isDisabled} checked={isChecked} onChange={onChange} className={styles.checkboxInput} type="checkbox" />
      {label && label}
    </label>
  )
}

export default Checkbox