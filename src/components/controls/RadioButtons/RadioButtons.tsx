import React, { useId } from "react";
import Form from "react-bootstrap/Form";

const RadioButtons = ({
  values,
  selectedValue,
  callback = () => {},
}: {
  values: string[];
  selectedValue?: string;
  callback?: (value: string) => void;
}) => {
  const id = useId();

  const onSelectedChange = (e: any) => {
    callback(e.target.value);
  };

  return (
    <Form.Group controlId={id + "RadioButtons"}>
      {values.map((value) => (
        <Form.Check
          type="radio"
          name={id}
          key={id + value}
          id={id + value}
          value={value}
          label={value}
          checked={selectedValue === value}
          onChange={onSelectedChange}
        ></Form.Check>
      ))}
    </Form.Group>
  );
};

export default RadioButtons;
