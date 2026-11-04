import { useId, type ComponentPropsWithRef } from "react";

import styles from "./Checkbox.module.css";

type NativeCheckboxProps = Omit<
  ComponentPropsWithRef<"input">,
  "type" | "aria-label"
>;

type CheckboxLabelProps =
  | {
    label: string;
    "aria-label"?: never;
  }
  | {
    label?: never;
    "aria-label": string;
  };

type CheckboxProps = NativeCheckboxProps &
  CheckboxLabelProps & {
    inputClassName?: string;
  };

function Checkbox({ label, inputClassName, ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = props.id ?? generatedId;

  const inputClasses = [styles.checkboxInput, inputClassName]
    .filter(Boolean)
    .join(" ");

  const labelClasses = [styles.checkboxContainer, props.className]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={labelClasses} htmlFor={inputId}>
      <input
        {...props}
        className={inputClasses}
        id={inputId}
        type="checkbox"
      />
      {label}
    </label>
  );
}

export default Checkbox;
