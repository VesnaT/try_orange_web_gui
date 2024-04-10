import React, { useId } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Dropdown = ({
  values,
  selectedValue,
  label = "",
  callback = () => {},
}: {
  values: string[];
  selectedValue?: string;
  label?: string;
  callback?: (value: any) => void;
}) => {
  const id = useId();

  const onSelectedChange = (e: any) => {
    callback(e.target.value);
  };

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
            defaultValue={selectedValue}
            onChange={onSelectedChange}
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
