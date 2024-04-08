import React from "react";
import { OverlayTrigger, Tooltip as BSTooltip } from "react-bootstrap";

const Tooltip = ({ children, tooltip }: any) => {
  if (!tooltip) {
    return children;
  }

  const overlay = <BSTooltip id="tooltip">{tooltip}</BSTooltip>;
  return (
    <div>
      <OverlayTrigger placement="bottom" overlay={overlay}>
        {children}
      </OverlayTrigger>
    </div>
  );
};

export default Tooltip;
