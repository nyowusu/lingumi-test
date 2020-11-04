import React from "react";
import useRadioButtons from "../../hooks/radio-buttons";

interface IRadioButton {
  value: string;
  id: string;
  name: string;
  label: string;
}

export function RadioButton({ value, id, name, label }: IRadioButton) {
  const [checked, InputProps] = useRadioButtons(name);
  if (checked) {
    console.log(value);
  }
  return (
    <div>
      <input
        {...InputProps}
        checked={checked as boolean}
        id={id}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
