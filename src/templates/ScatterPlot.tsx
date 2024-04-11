import React, { useState } from "react";
import Dropdown from "../components/controls/Dropdown/Dropdown";
import Widget from "../components/widget/Widget";
import Box from "../components/controls/Boxes/Box";
import Slider from "../components/controls/Slider/Slider";
import Checkbox from "../components/controls/Checkbox/Checkbox";
import Indent from "../components/controls/Boxes/Indent";

const ScatterPlot = () => {
  const values = ["Age", "Height", "Weight"];

  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(1);
  const [size, setSize] = useState(40);
  const [opacity, setOpacity] = useState(20);
  const [jittering, setJittering] = useState(60);
  const [jitterNumeric, setJitterNumeric] = useState(true);
  const [showRegressionLine, setShowRegressionLine] = useState(true);

  return (
    <Widget title="Scatter Plot">
      <Box title="Axes">
        <Dropdown
          values={values}
          selectedValue={values[xIndex]}
          label="Axis x:"
          callback={(value: string) => {
            setXIndex(values.indexOf(value));
          }}
        ></Dropdown>
        <Dropdown
          values={values}
          selectedValue={values[yIndex]}
          label="Axis y:"
          callback={(value: string) => {
            setYIndex(values.indexOf(value));
          }}
        ></Dropdown>
      </Box>
      <Box title="Points">
        <Slider value={size} label="Size:" callback={setSize}></Slider>
        <Slider value={opacity} label="Opacity:" callback={setOpacity}></Slider>
        <Slider
          value={jittering}
          label="Jittering:"
          callback={setJittering}
        ></Slider>
        <Indent>
          <Checkbox
            checked={jitterNumeric}
            label="Jitter numeric values"
            callback={setJitterNumeric}
          ></Checkbox>
        </Indent>
      </Box>
      <Box title="Plot">
        <Checkbox
          checked={false}
          label="Show color regions"
          disabled
        ></Checkbox>
        <Checkbox
          checked={showRegressionLine}
          label="Show gridlines"
          callback={setShowRegressionLine}
        ></Checkbox>
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
