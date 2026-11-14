import DatePicker from 'react-datepicker'
import InputField from '../inputField/InputField'

type DatePickerFieldProps = {
  label: string;
  error?: string;

  selected: Date | null;
  onChange: (date: Date | null) => void;
  onBlur?: () => void;
  minDate?: Date;
}

function DatePickerField({ label, error, selected, onChange, onBlur, minDate }: DatePickerFieldProps) {
  return (
    <DatePicker selected={selected} onChange={onChange} onBlur={onBlur} minDate={minDate} customInput={<InputField label={label} error={error} />} />
  )
}

export default DatePickerField