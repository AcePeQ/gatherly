import DatePicker from "react-datepicker";
import InputField from "../inputField/InputField";

import styles from "./DatePickerField.module.css";

type DatePickerFieldProps = {
  label: string;
  error?: string;

  selected: Date | null;
  onChange: (date: Date | null) => void;
  onBlur?: () => void;
  minDate?: Date;
};

function DatePickerField({
  label,
  error,
  selected,
  onChange,
  onBlur,
  minDate,
}: DatePickerFieldProps) {
  return (
    <div className={styles.field}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        onBlur={onBlur}
        minDate={minDate}
        customInput={
          <InputField
            label={label}
            error={error}
          />
        }
        showPopperArrow={false}
        dateFormat="dd.MM.yyyy"
        wrapperClassName={styles.wrapper}
        calendarClassName={styles.calendar}
        popperClassName={styles.popper}
      />
    </div>
  );
}

export default DatePickerField;
