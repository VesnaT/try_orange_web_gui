import React, { useId } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Dropdown = ({
  values,
  label = "",
  callback = () => {},
}: {
  values: string[];
  label?: string;
  callback?: (value: any) => void;
}) => {
  const id = useId();
  return (
    <Form.Group className="mb-3">
      <Row>
        {label.length > 0 && (
          <Col sm={2}>
            <Form.Label htmlFor={id + label}>{label}</Form.Label>
          </Col>
        )}
        <Col>
          <Form.Select
            id={id + label}
            aria-label="Default select example"
            onChange={callback}
          >
            {values.map((value: string) => (
              <option key={value} id={value} value={value} label={value}>
                {value}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Form.Group>
  );
};

export default Dropdown;
