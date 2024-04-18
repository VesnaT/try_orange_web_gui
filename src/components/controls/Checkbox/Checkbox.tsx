import React, { useId, useState } from "react";
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
  const id = useId();
  const [isChecked, setIsChecked] = useState(checked);
  const onCheckedChange = (e: any) => {
    callback(e.target.checked);
    setIsChecked(e.target.checked);
  };

  return (
    <Form.Check
      type="checkbox"
      id={id + label}
      label={label}
      checked={isChecked}
      disabled={disabled}
      onChange={onCheckedChange}
    />
  );
};

export default Checkbox;
