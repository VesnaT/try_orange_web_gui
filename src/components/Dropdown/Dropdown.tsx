import React from "react";
import Form from "react-bootstrap/Form";
import Tooltip from "../Tooltip/Tooltip";

const Dropdown = ({
  options,
  label = "",
  disabled = false,
  callback = () => {},
  tooltip = "",
}: {
  options: string[];
  label?: string;
  disabled?: boolean;
  callback?: () => void;
  tooltip?: string;
}) => {
  return (
    <Tooltip tooltip={tooltip}>
      <Form>
        <Form.Group className="mb-3" controlId="Dropdown">
          <Form.Label>{label}</Form.Label>
          <Form.Select
            aria-label="Default select example"
            disabled={disabled}
            onChange={callback}
          >
            {options.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
    </Tooltip>
  );
};

export default Dropdown;
