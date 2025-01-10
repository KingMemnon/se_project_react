import "./WeatherCard.css";
import { weatherTypes, defaultWeatherTypes } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  const filteredTypes = weatherTypes.filter((type) => {
    return (
      type.day === weatherData.isDay && type.condition === weatherData.condition
    );
  });

  let weatherType;
  if (filteredTypes.length === 0) {
    weatherType = defaultWeatherTypes[weatherData.isDay ? "day" : "night"];
  } else {
    weatherType = filteredTypes[0];
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[currentTemperatureUnit]} &deg;{" "}
        {currentTemperatureUnit}{" "}
      </p>
      <img
        src={weatherType?.url}
        alt={`It is ${weatherData.isDay ? "day " : "night "}time, with ${
          weatherType?.condition || "default"
        } weather.`}
        className="weather-card__image"
      ></img>
    </section>
  );
}

export default WeatherCard;
