import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Checkbox = ({
  text,
  disabled = false,
  callback = () => {},
}: {
  text: string;
  disabled?: boolean;
  callback?: () => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const _onChange = () => {
    setIsChecked(!isChecked);
    callback();
  };

  return (
    <Form>
      <Form.Check
        id={text}
        type="checkbox"
        label={text}
        disabled={disabled}
        checked={isChecked}
        onChange={_onChange}
      />
    </Form>
  );
};

export default Checkbox;
