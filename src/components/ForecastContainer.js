import "./ForecastContainer.css";
import WeatherOptionsMenu from "./WeatherOptionsMenu";
import { useState } from "react";
import lobosmarinos from "../images/lobosmarinos.png";
import kneeHolding from "../images/kneeHolding.jpg";
import uhr from "../images/Uhr.jpg";
import windchime from "../images/windchime.jpg";

const ForecastContainer = ({ weatherData }) => {
  const [selectedInfo, setSelectedInfo] = useState(0);
  const selectedInfoHandler = (selected) => {
    setSelectedInfo(selected);
  };

  const forecastOptions = [
    {
      type: `${weatherData.weather[0].description}`,
      img: lobosmarinos,
      text: "Seawolf souvenir says:",
      alt: "Seawolf souvenir",
    },
    {
      type: `The temperature is ${weatherData.main.temp}º today`,
      img: uhr,
      text: "Weather house says:",
      alt: "Weather house souvenir",
    },
    {
      type: `Humidity is ${weatherData.main.humidity}%`,
      img: kneeHolding,
      text: "Grandma's knee says:",
      alt: "Person grabbing their knee",
    },
    {
      type: `The speed of the wind is ${weatherData.wind.speed} km/h`,
      img: windchime,
      text: "Shell windchime says:",
      alt: "Shell wind chime",
    },
  ];

  return (
    <div>
      <div className="forecast-container">
        <div className="forecast-cointainer___imgcontainer">
          <img
            className="forecast-container__img"
            src={forecastOptions[selectedInfo].img}
            alt={forecastOptions[selectedInfo].alt}
          />
        </div>
        <div className="forecast-container__text">
          <p className="forecast-container__location">{weatherData.name}</p>
          <p>{forecastOptions[selectedInfo].text}</p>
          <p>{forecastOptions[selectedInfo].type}</p>
        </div>
      </div>
      <WeatherOptionsMenu
        onClickButton={selectedInfoHandler}
        selected={selectedInfo}
      />
    </div>
  );
};

export default ForecastContainer;
