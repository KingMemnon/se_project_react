import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  // const [currentTemperatureUnit, handleToggleSwitchChange] =
  //   React.useState("C");

  // const handleChange = () => {
  //   if (currentTemperatureUnit === "C") handleToggleSwitchChange("F");
  //   if (currentTemperatureUnit === "F") handleToggleSwitchChange("C");
  // };
  // console.log(currentTemperatureUnit);
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  // console.log(currentTemperatureUnit);
  return (
    <label className="toggle__switch">
      <input
        type="checkbox"
        className="toggle__switch-input"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggle__slider toggle__slider-F"
            : "toggle__slider toggle__slider-C"
        }
      ></span>
      <p
        className={`toggle__temp-F ${
          currentTemperatureUnit === "F" && "toggle__active"
        }`}
      >
        F
      </p>
      <p
        className={`toggle__temp-C ${
          currentTemperatureUnit === "C" && "toggle__active"
        }`}
      >
        C
      </p>
    </label>
  );
};
export default ToggleSwitch;
