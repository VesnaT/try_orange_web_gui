import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Tooltip from "../Tooltip/Tooltip";

const Slider = ({
  text,
  disabled = false,
  callback = () => console.log("Default onSlide"),
  tooltip = "",
}: {
  text: string;
  disabled?: boolean;
  callback?: () => void;
  tooltip?: string;
}) => {
  const [value, setValue] = useState(50);

  const _onChange = (event: any) => {
    setValue(event.target.value);
    callback();
  };

  return (
    <Tooltip tooltip={tooltip}>
      <Form>
        <Form.Group className="mb-3" controlId="Slider">
          <Form.Label>{text}</Form.Label>
          <Form.Range onChange={_onChange} disabled={disabled} />
          <Form.Label>{value}</Form.Label>
        </Form.Group>
      </Form>
    </Tooltip>
  );
};

export default Slider;
