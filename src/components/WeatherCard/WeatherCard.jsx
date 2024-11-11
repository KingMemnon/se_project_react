import "./WeatherCard.css";
import { weatherTypes, defaultWeatherTypes } from "../../utils/constants";

function WeatherCard({ weatherData }) {
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
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F </p>
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
