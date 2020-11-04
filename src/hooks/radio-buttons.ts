import { FormEvent, useState } from "react";

export default function useRadioButtons(name: string) {
  const [value, setValue] = useState<boolean>();

  const handleChange = (ev: FormEvent<HTMLInputElement>) => {
    setValue(ev.currentTarget.checked);
  };

  const inputProps = {
    onChange: handleChange,
    name,
    type: "radio",
  };

  return [value, inputProps];
}
