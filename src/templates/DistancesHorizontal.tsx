import React, { useState } from "react";
import Box from "../components/Boxes/Box";
import HorizontalBox from "../components/Boxes/HorizontalBox";
import RadioButtons from "../components/RadioButtons/RadioButtons";
import Widget from "../components/Widget/Widget";

const Distances = () => {
  const [compareIndex, setCompareIndex] = useState(1);
  const [metricIndex, setMetricIndex] = useState(3);

  const compareValues = ["Rows", "Columns"];
  const metricValues = [
    "Euclidean (normalized)",
    "Euclidean",
    "Manhattan (normalized)",
    "Manhattan",
    "Cosine",
  ];

  const onCompareChanged = (value: string) => {
    console.log("onCompareChanged", value);
    setCompareIndex(compareValues.indexOf(value));
  };

  const onMetricChanged = (value: string) => {
    console.log("onMetricChanged", value);
    setMetricIndex(metricValues.indexOf(value));
  };

  return (
    <Widget title="Distances">
      <HorizontalBox>
        <Box title="Compare">
          <RadioButtons
            values={compareValues}
            selectedValue={compareValues[compareIndex]}
            callback={onCompareChanged}
          ></RadioButtons>
        </Box>
        <Box title="Distance Metric">
          <RadioButtons
            values={metricValues}
            selectedValue={metricValues[metricIndex]}
            callback={onMetricChanged}
          ></RadioButtons>
        </Box>
      </HorizontalBox>
    </Widget>
  );
};

export default Distances;
