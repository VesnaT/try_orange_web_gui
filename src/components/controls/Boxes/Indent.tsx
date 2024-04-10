import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Indent = ({ children }: { children: any }) => {
  return (
    <Form.Group as={Row}>
      <Col sm={3}></Col>
      <Col>{children}</Col>
    </Form.Group>
  );
};

export default Indent;
