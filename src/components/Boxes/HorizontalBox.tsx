import React from "react";
import Row from "react-bootstrap/Row";
import Box from "./Box";

const HorizontalBox = ({
  title = "",
  children,
}: {
  title?: string;
  children: any;
}) => {
  return (
    <Box title={title}>
      <Row>{children}</Row>
    </Box>
  );
};

export default HorizontalBox;
