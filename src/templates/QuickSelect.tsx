import React, { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import Widget from "../components/Widget/Widget";

const QuickSelect = () => {
  const [variableIndex, setVariableIndex] = useState(1);
  const [valueIndex, setValueIndex] = useState(2);

  const variableValues = ["One", "Two", "Three"];
  const valueValues = ["Red", "Blue", "Green"];

  const onVariableChanged = (value: string) => {
    console.log("onVariableChanged", value);
    setVariableIndex(variableValues.indexOf(value));
  };

  const onValueChanged = (value: any) => {
    console.log("onValueChanged", value);
    setValueIndex(valueValues.indexOf(value));
  };

  return (
    <Widget title="Quick Select">
      <Dropdown
        values={variableValues}
        selectedValue={variableValues[variableIndex]}
        label="Variable:"
        callback={onVariableChanged}
      ></Dropdown>
      <Dropdown
        values={valueValues}
        selectedValue={valueValues[valueIndex]}
        label="Value:"
        callback={onValueChanged}
      ></Dropdown>
    </Widget>
  );
};

export default QuickSelect;
