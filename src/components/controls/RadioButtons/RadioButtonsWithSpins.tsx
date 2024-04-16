import React, { useId, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface ISpinSetting {
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
}

interface IOption {
  label: string;
  spinSetting?: ISpinSetting;
}

interface IValue {
  label: string;
  spinValue?: number;
}

interface IState {
  label: string;
  spinValue?: number;
  spinSetting?: ISpinSetting;
}

const optionsToState = (options: IOption[], selectedValue: IValue) => {
  return options.map((option: IOption) => {
    const spinValue =
      selectedValue.label === option.label
        ? selectedValue.spinValue
        : option.spinSetting?.defaultValue;
    return {
      label: option.label,
      spinValue: spinValue,
      spinSetting: option.spinSetting,
    };
  });
};


const RadioButtonsWithSpins = ({
  options,
  selectedValue,
  callback = () => {},
}: {
  options: IOption[];
  selectedValue: IValue;
  callback?: (value: any) => void;  // TODO: any -> IValue
}) => {
  const [currentState, setCurrentState] = useState(
    optionsToState(options, selectedValue),
  );
  const [selected, setSelected] = useState(selectedValue.label);
  const id = useId();
  const onSelectionChange = (e: any) => {
    setSelected(e.target.value);

    const spinVal = currentState.find(
      (el: IState) => el.label === e.target.value,
    )?.spinValue;
    callback({ label: e.target.value, spinValue: spinVal });
  };

  const onSpinChange = (e: any, label: string) => {
    const newState = currentState.map((option: IState) => {
      const spinValue =
        option.label === label ? e.target.value : option.spinValue;
      return {
        label: option.label,
        spinValue: spinValue,
        spinSetting: option.spinSetting,
      };
    });

    setCurrentState(newState);
    callback({ label: label, spinValue: e.target.value });
  };

  return (
    <Form.Group>
      {currentState.map((option: IState) => (
        <Row className="mb-2" key={id + option.label}>
          <Col>
            <Form.Check
              type="radio"
              name={id}
              id={id + option.label + "radio"}
              value={option.label}
              label={option.label}
              checked={selected === option.label}
              onChange={onSelectionChange}
            ></Form.Check>
          </Col>
          <Col>
            {option.spinSetting && (
              <Form.Control
                disabled={selected !== option.label}
                type="number"
                id={id + option.label + "number"}
                value={option.spinValue}
                min={option.spinSetting.min}
                max={option.spinSetting.max}
                step={option.spinSetting.step}
                onChange={(e: any) => {
                  option.spinSetting && onSpinChange(e, option.label);
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
