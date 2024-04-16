import React, { useState } from "react";
import Dropdown from "../components/controls/Dropdown/Dropdown";
import Widget from "../components/widget/Widget";
import Box from "../components/controls/Boxes/Box";
import Slider from "../components/controls/Slider/Slider";
import Checkbox from "../components/controls/Checkbox/Checkbox";
import RadioButtonsWithSpins from "../components/controls/RadioButtons/RadioButtonsWithSpins";

const HierarchicalClustering = () => {
  const linkageValues = ["Single", "Average", "Ward"];
  const annotationValues = ["One", "Two", "Three"];
  const colorValues = ["Red", "Blue", "Green"];
  const pruningOptions = [
    { label: "None" },
    {
      label: "Max depth:",
      spinSetting: {
        defaultValue: 10,
        min: 1,
        max: 100,
      },
    },
  ];
  const selectionOptions = [
    { label: "Manual" },
    {
      label: "Height ratio:",
      spinSetting: {
        defaultValue: 0.75,
        min: 0,
        max: 1,
        step: 0.001,
      },
    },
    {
      label: "Top N:",
      spinSetting: {
        defaultValue: 3,
        min: 1,
        max: 20,
      },
    },
  ];

  const [linkageValue, setLinkageValue] = useState("Ward");
  const [annotationValue, setAnnotationValue] = useState("One");
  const [colorValue, setColorValue] = useState("Blue");
  const [pruningValue, setPruningValue] = useState({
    label: "None",
  });
  const [selectionValue, setSelectionValue] = useState({
    label: "Height ratio:",
    spinValue: 0.45,
  });
  const [zoom, setZoom] = useState(0);

  return (
    <Widget title="Hierarhical Clustering">
      <Box title="Linkage">
        <Dropdown
          values={linkageValues}
          selectedValue={linkageValue}
          callback={setLinkageValue}
        ></Dropdown>
      </Box>
      <Box title="Annotations">
        <Dropdown
          values={annotationValues}
          selectedValue={annotationValue}
          callback={setAnnotationValue}
        ></Dropdown>
        <Checkbox
          checked={false}
          label="Show lables only for subset"
          disabled
        ></Checkbox>
        <Dropdown
          values={colorValues}
          selectedValue={colorValue}
          callback={setColorValue}
          label="Color by:"
        ></Dropdown>
      </Box>
      <Box title="Pruning">
        <RadioButtonsWithSpins
          options={pruningOptions}
          selectedValue={pruningValue}
          callback={setPruningValue}
        ></RadioButtonsWithSpins>
      </Box>
      <Box title="Selection">
        <RadioButtonsWithSpins
          options={selectionOptions}
          selectedValue={selectionValue}
          callback={setSelectionValue}
        ></RadioButtonsWithSpins>
      </Box>
      <Slider value={zoom} label="Zoom:" callback={setZoom}></Slider>
    </Widget>
  );
};

export default HierarchicalClustering;
