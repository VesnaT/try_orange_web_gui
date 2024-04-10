import React from "react";
import Row from "react-bootstrap/Row";

const HorizontalBox = ({ children }: { title?: string; children: any }) => {
  return <Row>{children}</Row>;
};

export default HorizontalBox;
