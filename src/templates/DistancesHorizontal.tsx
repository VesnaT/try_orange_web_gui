import React, { useState } from "react";
import Box from "../components/controls/Boxes/Box";
import HorizontalBox from "../components/controls/Boxes/HorizontalBox";
import RadioButtons from "../components/controls/RadioButtons/RadioButtons";
import Widget from "../components/widget/Widget";

const Distances = () => {
  const compareValues = ["Rows", "Columns"];
  const metricValues = [
    "Euclidean (normalized)",
    "Euclidean",
    "Manhattan (normalized)",
    "Manhattan",
    "Cosine",
  ];

  const [compareIndex, setCompareIndex] = useState(1);
  const [metricIndex, setMetricIndex] = useState(3);

  return (
    <Widget title="Distances">
      <HorizontalBox>
        <Box title="Compare">
          <RadioButtons
            values={compareValues}
            selectedValue={compareValues[compareIndex]}
            callback={(value: string) => {
              setCompareIndex(compareValues.indexOf(value));
            }}
          ></RadioButtons>
        </Box>
        <Box title="Distance Metric">
          <RadioButtons
            values={metricValues}
            selectedValue={metricValues[metricIndex]}
            callback={(value: string) => {
              setMetricIndex(metricValues.indexOf(value));
            }}
          ></RadioButtons>
        </Box>
      </HorizontalBox>
    </Widget>
  );
};

export default Distances;
