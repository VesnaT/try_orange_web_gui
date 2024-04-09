import React from "react";
import Form from "react-bootstrap/Form";

const RadioButtons = ({
  options,
  label = "",
  disabled = false,
  callback = () => {},
}: {
  options: string[];
  label?: string;
  disabled?: boolean;
  callback?: () => void;
}) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="RadioButtons">
        <Form.Label>{label}</Form.Label>
        {options.map((option) => (
          <Form.Check
            id={option}
            key={option}
            type="radio"
            label={option}
            name="group"
            disabled={disabled}
            onChange={callback}
          ></Form.Check>
        ))}
      </Form.Group>
    </Form>
  );
};

export default RadioButtons;
