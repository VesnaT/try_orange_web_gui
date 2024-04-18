import React from "react";
import Box from "../components/controls/Boxes/Box";
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

  return (
    <Widget title="Distances">
      <Box title="Compare">
        <RadioButtons
          values={compareValues}
          selectedValue={"Columns"}
        ></RadioButtons>
      </Box>
      <Box title="Distance Metric">
        <RadioButtons
          values={metricValues}
          selectedValue={"Manhattan"}
        ></RadioButtons>
      </Box>
    </Widget>
  );
};

export default Distances;
