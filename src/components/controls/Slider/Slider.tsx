import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Slider = ({
  value,
  label = "",
  callback = () => {},
}: {
  value: number;
  label?: string;
  callback?: (value: number) => void;
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const onValueChange = (e: any) => {
    callback(e.target.value);
    setCurrentValue(e.target.value);
  };

  return (
    <Form.Group controlId={"Slider"} as={Row}>
      <Col sm={3}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col>
        <Form.Range value={currentValue} onChange={onValueChange} />
      </Col>
    </Form.Group>
  );
};

export default Slider;
