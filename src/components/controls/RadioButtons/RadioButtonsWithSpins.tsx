import React, { useId } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface ISpinSetting {
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
  callback?: (value: number) => void;
}

interface IOption {
  label: string;
  spinSetting?: ISpinSetting | null;
}

const RadioButtonsWithSpins = ({
  options,
  selectedValue,
  callback = () => {},
}: {
  options: IOption[];
  selectedValue: string;
  callback?: (value: string) => void;
}) => {
  const id = useId();

  const onSelectedChange = (e: any) => {
    callback(e.target.value);
  };

  return (
    <Form.Group>
      {options.map((option) => (
        <Row className="mb-2" key={id + option.label}>
          <Col>
            <Form.Check
              type="radio"
              name={id}
              key={id + option.label + "radio"}
              id={id + option.label + "radio"}
              value={option.label}
              label={option.label}
              checked={selectedValue === option.label}
              onChange={onSelectedChange}
            ></Form.Check>
          </Col>
          <Col>
            {option.spinSetting && (
              <Form.Control
                disabled={selectedValue !== option.label}
                type="number"
                key={id + option.label + "number"}
                id={id + option.label + "number"}
                value={option.spinSetting.defaultValue}
                min={option.spinSetting.min}
                max={option.spinSetting.max}
                step={option.spinSetting.step}
                onChange={(e: any) => {
                  option.spinSetting &&
                    option.spinSetting.callback &&
                    option.spinSetting.callback(e.target.value);
                }}
              ></Form.Control>
            )}
          </Col>
        </Row>
      ))}
    </Form.Group>
  );
};

export default RadioButtonsWithSpins;
