import React, { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

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
            ? "toggle__slider toggle__slider_letter-f"
            : "toggle__slider toggle__slider_letter-c"
        }
      ></span>
      <p
        className={`toggle__text toggle__text_letter-f  ${
          currentTemperatureUnit === "F" && "toggle__text_active"
        }`}
      >
        F
      </p>
      <p
        className={`toggle__text toggle__text_letter-c  ${
          currentTemperatureUnit === "C" && "toggle__text_active"
        }`}
      >
        C
      </p>
    </label>
  );
};
export default ToggleSwitch;
