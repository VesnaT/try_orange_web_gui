import React from "react";
import Dropdown from "../components/controls/Dropdown/Dropdown";
import Widget from "../components/widget/Widget";
import Box from "../components/controls/Boxes/Box";
import Slider from "../components/controls/Slider/Slider";
import Checkbox from "../components/controls/Checkbox/Checkbox";
import Indent from "../components/controls/Boxes/Indent";

const ScatterPlot = () => {
  const values = ["Age", "Height", "Weight"];

  return (
    <Widget title="Scatter Plot">
      <Box title="Axes">
        <Dropdown
          values={values}
          selectedValue={"Age"}
          label="Axis x:"
        ></Dropdown>
        <Dropdown
          values={values}
          selectedValue={"Height"}
          label="Axis y:"
        ></Dropdown>
      </Box>
      <Box title="Points">
        <Slider value={40} label="Size:"></Slider>
        <Slider value={20} label="Opacity:"></Slider>
        <Slider value={60} label="Jittering:"></Slider>
        <Indent>
          <Checkbox checked={true} label="Jitter numeric values"></Checkbox>
        </Indent>
      </Box>
      <Box title="Plot">
        <Checkbox
          checked={false}
          label="Show color regions"
          disabled
        ></Checkbox>
        <Checkbox checked={true} label="Show gridlines"></Checkbox>
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
