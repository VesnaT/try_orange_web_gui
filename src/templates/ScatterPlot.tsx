import React, { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import Widget from "../components/Widget/Widget";
import Box from "../components/Boxes/Box";
import Slider from "../components/Slider/Slider";
import Checkbox from "../components/Checkbox/Checkbox";
import Indent from "../components/Boxes/Indent";

const ScatterPlot = () => {
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(1);

  const values = ["Age", "Height", "Weight"];

  const [size, setSize] = useState(40);
  const [opacity, setOpacity] = useState(20);
  const [jittering, setJittering] = useState(60);
  const [jitterNumeric, setJitterNumeric] = useState(true);

  const onXChanged = (value: string) => {
    console.log("onXChanged", value);
    setXIndex(values.indexOf(value));
  };

  const onYChanged = (value: string) => {
    console.log("onYChanged", value);
    setYIndex(values.indexOf(value));
  };

  const onSizeChanged = (value: number) => {
    console.log("onSizeChanged", value);
    setSize(value);
  };

  const onOpacityChanged = (value: number) => {
    console.log("onOpacityChanged", value);
    setOpacity(value);
  };

  const onJitteringChanged = (value: number) => {
    console.log("onJitteringChanged", value);
    setJittering(value);
  };

  const onJitterNumericChanged = (value: boolean) => {
    console.log("onJitterNumericChanged", value);
    setJitterNumeric(value);
  };

  return (
    <Widget title="Scatter Plot">
      <Box title="Axes">
        <Dropdown
          values={values}
          selectedValue={values[xIndex]}
          label="Axis x:"
          callback={onXChanged}
        ></Dropdown>
        <Dropdown
          values={values}
          selectedValue={values[yIndex]}
          label="Axis y:"
          callback={onYChanged}
        ></Dropdown>
      </Box>
      <Box title="Points">
        <Slider value={size} label="Size:" callback={onSizeChanged}></Slider>
        <Slider
          value={opacity}
          label="Opacity:"
          callback={onOpacityChanged}
        ></Slider>
        <Slider
          value={jittering}
          label="Jittering:"
          callback={onJitteringChanged}
        ></Slider>
        <Indent>
          <Checkbox
            checked={jitterNumeric}
            label="Jitter numeric values"
            callback={onJitterNumericChanged}
          ></Checkbox>
        </Indent>
      </Box>
      <Box title="Plot">
        <Checkbox
          checked={false}
          label="Show color regions"
          disabled
        ></Checkbox>
        <Checkbox checked={false} label="Show gridlines"></Checkbox>
        <Checkbox
          checked={false}
          label="Show regression line"
          disabled
        ></Checkbox>
      </Box>
    </Widget>
  );
};

export default ScatterPlot;
