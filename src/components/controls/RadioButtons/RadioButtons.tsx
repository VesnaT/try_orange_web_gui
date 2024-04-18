import React, { useId, useState } from "react";
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
  const [selected, setSelected] = useState(selectedValue);

  const onSelectedChange = (e: any) => {
    callback(e.target.value);
    setSelected(e.target.value);
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
          checked={selected === value}
          onChange={onSelectedChange}
        ></Form.Check>
      ))}
    </Form.Group>
  );
};

export default RadioButtons;
