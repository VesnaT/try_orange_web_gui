import React from "react";
import Form from "react-bootstrap/Form";

const Checkbox = ({
  checked,
  label = "",
  disabled = false,
  callback = () => {},
}: {
  checked: boolean;
  label?: string;
  disabled?: boolean;
  callback?: (value: boolean) => void;
}) => {
  const onCheckedChanged = (e: any) => {
    callback(e.target.checked);
  };

  return (
    <Form.Check
      type="checkbox"
      id={label}
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={onCheckedChanged}
    />
  );
};

export default Checkbox;
