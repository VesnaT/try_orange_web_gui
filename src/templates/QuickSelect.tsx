import React, { useState } from "react";
import Dropdown from "../components/controls/Dropdown/Dropdown";
import Widget from "../components/widget/Widget";

const QuickSelect = () => {
  const variables = ["One", "Two", "Three"];
  const values = ["Red", "Blue", "Green"];

  const [variable, setVariable] = useState("Two");
  const [value, setValue] = useState("Green");

  return (
    <Widget title="Quick Select">
      <Dropdown
        values={variables}
        selectedValue={variable}
        label="Variable:"
        callback={setVariable}
      ></Dropdown>
      <Dropdown
        values={values}
        selectedValue={value}
        label="Value:"
        callback={setValue}
      ></Dropdown>
    </Widget>
  );
};

export default QuickSelect;
