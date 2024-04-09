import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Dropdown from "./components/Dropdown/Dropdown";
import Checkbox from "./components/Checkbox/Checkbox";
import RadioButtons from "./components/RadioButtons/RadioButtons";
import Slider from "./components/Slider/Slider";

function App() {
  const onButtonClicked = () => {
    console.log("onButtonClicked");
  };

  const onCheckChanged = () => {
    console.log("onCheckChanged");
  };

  const onSliderChanged = () => {
    console.log("onSliderChanged");
  };

  return (
    <div className="p-3 m-0 border-0 bd-example m-0 border-0">
      <Button
        text="Click me"
        callback={onButtonClicked}
        tooltip="Button tooltip"
      ></Button>
      <Button text="Click me 2" disabled={true}></Button>
      <Checkbox
        text="Check me"
        callback={onCheckChanged}
        tooltip="Checkbox tooltip"
      ></Checkbox>
      <Checkbox text="Check me 2" disabled={true}></Checkbox>
      <Dropdown
        label={"Select"}
        options={["one", "two", "three"]}
        tooltip="Dropdown tooltip"
      ></Dropdown>
      <RadioButtons values={["one", "two", "three"]}></RadioButtons>
      <Slider
        text={"Range"}
        tooltip={"Range tooltip"}
        callback={onSliderChanged}
      ></Slider>
      <Slider text={"Range 2"} disabled={true}></Slider>
    </div>
  );
}

export default App;
