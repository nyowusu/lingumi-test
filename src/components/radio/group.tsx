import React from "react";
import { RadioButton } from "./button";

export interface IRadioButtonGroup {
  name: string;
  idValueList: {
    id: string;
    value: string;
    label: string;
  }[];
  classNames: string;
  groupTitle: string;
}

export default function RadioButtonGroup({
  name,
  idValueList,
  classNames,
  groupTitle,
}: IRadioButtonGroup) {
  return (
    <div className={classNames}>
      <span>{groupTitle}</span>
      {idValueList.map((button) => {
        return (
          <RadioButton
            id={button.id}
            value={button.value}
            name={name}
            label={button.label}
            key={button.value}
          />
        );
      })}
    </div>
  );
}
