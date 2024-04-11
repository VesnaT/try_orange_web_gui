import React, { useId } from "react";
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
  const id = useId();
  const onValueChange = (e: any) => {
    callback(e.target.value);
  };

  return (
    <Form.Group controlId={id + "Slider"} as={Row}>
      <Col sm={3}>
        <Form.Label>{label}</Form.Label>
      </Col>
      <Col>
        <Form.Range value={value} onChange={onValueChange} />
      </Col>
    </Form.Group>
  );
};

export default Slider;
