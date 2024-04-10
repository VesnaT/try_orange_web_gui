import React, { useState } from "react";
import Box from "../components/controls/Boxes/Box";
import RadioButtons from "../components/controls/RadioButtons/RadioButtons";
import Widget from "../components/widget/Widget";

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
      </Widget>
  );
};

export default Distances;
