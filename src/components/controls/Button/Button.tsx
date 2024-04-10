import React from "react";
import { Button as BSButton } from "react-bootstrap";
import Tooltip from "../Tooltip/Tooltip";

const Button = ({
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
  return (
    <Tooltip tooltip={tooltip}>
      <BSButton variant="primary" disabled={disabled} onClick={callback}>
        {text}
      </BSButton>
    </Tooltip>
  );
};

export default Button;
