import React from "react";
import Form from "react-bootstrap/Form";

const Checkbox = ({
  checked,
  label = "",
  callback = () => {},
}: {
  checked: boolean;
  label?: string;
  callback?: (value: boolean) => void;
}) => {
  const onCheckedChanged = (e: any) => {
    callback(e.target.checked);
  };

  return (
    <Form.Check
      type="checkbox"
      inline
      id={label}
      label={label}
      checked={checked}
      onChange={onCheckedChanged}
    />
  );
};

export default Checkbox;
