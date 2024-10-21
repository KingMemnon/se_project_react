import "./WeatherCard.css";
import SunnyDay from "../../images/SunnyDay.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">75 &deg; F </p>
      <img src={SunnyDay} alt="Sunny" className="weather-card__image"></img>
    </section>
  );
}

export default WeatherCard;
