import React from "react";
import "./App.css";
import Distances from "./templates/Distances";
import QuickSelect from "./templates/QuickSelect";
import ScatterPlot from "./templates/ScatterPlot";
import HierarchicalClustering from "./templates/HierarchicalClustering";

function App() {
  return (
    <div>
      <HierarchicalClustering></HierarchicalClustering>
      <Distances></Distances>
      <QuickSelect></QuickSelect>
      <ScatterPlot></ScatterPlot>
    </div>
  );
}

export default App;
