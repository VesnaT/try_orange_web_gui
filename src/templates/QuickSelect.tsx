import React, { useState } from "react";
import Dropdown from "../components/controls/Dropdown/Dropdown";
import Widget from "../components/widget/Widget";

const QuickSelect = () => {
  const variableValues = ["One", "Two", "Three"];
  const valueValues = ["Red", "Blue", "Green"];

  const [variableIndex, setVariableIndex] = useState(1);
  const [valueIndex, setValueIndex] = useState(2);

  return (
    <Widget title="Quick Select">
      <Dropdown
        values={variableValues}
        selectedValue={variableValues[variableIndex]}
        label="Variable:"
        callback={(value: string) => {
          setVariableIndex(variableValues.indexOf(value));
        }}
      ></Dropdown>
      <Dropdown
        values={valueValues}
        selectedValue={valueValues[valueIndex]}
        label="Value:"
        callback={(value: any) => {
          setValueIndex(valueValues.indexOf(value));
        }}
      ></Dropdown>
    </Widget>
  );
};

export default QuickSelect;
