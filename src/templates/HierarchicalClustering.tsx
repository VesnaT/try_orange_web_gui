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
  const pruningValues = ["None", "Max depth:"];
  const selectionValues = ["Manual", "Height ratio:", "Top N:"];

  const [linkageIndex, setLinkageIndex] = useState(0);
  const [annotationIndex, setAnnotationIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [pruningIndex, setPruningIndex] = useState(0);
  const [selectionIndex, setSelectionIndex] = useState(0);
  const [maxDepth, setMaxDepth] = useState(10);
  const [heightRatio, setHeightRatio] = useState(0.75);
  const [topN, setTopN] = useState(3);
  const [zoom, setZoom] = useState(0);

  return (
    <Widget title="Hierarhical Clustering">
      <Box title="Linkage">
        <Dropdown
          values={linkageValues}
          selectedValue={linkageValues[linkageIndex]}
        ></Dropdown>
      </Box>
      <Box title="Annotations">
        <Dropdown
          values={annotationValues}
          selectedValue={annotationValues[annotationIndex]}
        ></Dropdown>
        <Checkbox
          checked={false}
          label="Show lables only for subset"
          disabled
        ></Checkbox>
        <Dropdown
          values={colorValues}
          selectedValue={colorValues[colorIndex]}
          label="Color by:"
        ></Dropdown>
      </Box>
      <Box title="Pruning">
        <RadioButtonsWithSpins
          options={[
            { value: pruningValues[0], spinSetting: null },
            {
              value: pruningValues[1],
              spinSetting: {
                defaultValue: maxDepth,
                min: 1,
                max: 100,
                callback: setMaxDepth,
              },
            },
          ]}
          selectedValue={pruningValues[pruningIndex]}
          callback={(value: string) => {
            setPruningIndex(pruningValues.indexOf(value));
          }}
        ></RadioButtonsWithSpins>
      </Box>
      <Box title="Selection">
        <RadioButtonsWithSpins
          options={[
            { value: selectionValues[0], spinSetting: null },
            {
              value: selectionValues[1],
              spinSetting: {
                defaultValue: heightRatio,
                min: 0,
                max: 1,
                step: 0.001,
                callback: setHeightRatio,
              },
            },
            {
              value: selectionValues[2],
              spinSetting: {
                defaultValue: topN,
                min: 1,
                max: 20,
                callback: setTopN,
              },
            },
          ]}
          selectedValue={selectionValues[selectionIndex]}
          callback={(value: string) => {
            setSelectionIndex(selectionValues.indexOf(value));
          }}
        ></RadioButtonsWithSpins>
      </Box>
      <Slider value={zoom} label="Zoom:" callback={setZoom}></Slider>
    </Widget>
  );
};

export default HierarchicalClustering;
