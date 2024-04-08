import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Tooltip from "../Tooltip/Tooltip";

const Checkbox = ({
  text,
  disabled = false,
  callback = () => {},
  tooltip = "",
}: {
  text: string;
  disabled?: boolean;
  callback?: () => void;
  tooltip?: string;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const _onChange = () => {
    setIsChecked(!isChecked);
    callback();
  };

  return (
    <Tooltip tooltip={tooltip}>
      <Form>
        <Form.Check
          inline
          id={text}
          type="checkbox"
          label={text}
          disabled={disabled}
          checked={isChecked}
          onChange={_onChange}
        />
      </Form>
    </Tooltip>
  );
};

export default Checkbox;
