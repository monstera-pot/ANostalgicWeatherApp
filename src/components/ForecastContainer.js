import "./ForecastContainer.css";
import WeatherOptionsMenu from "./WeatherOptionsMenu";
import { useState } from "react";
//import forecastOptions from "../shared/forecastOptions";
import lobosmarinos from "../images/lobosmarinos.png";
import rodilla from "../images/rodilla.jpg";
import uhr from "../images/Uhr.jpg";
import windchime from "../images/windchime.jpg";

const ForecastContainer = ({ weatherData }) => {
  const [selectedInfo, setSelectedInfo] = useState(0);
  const selectedInfoHandler = (selected) => {
    setSelectedInfo(selected);
  };

  const forecastOptions = [
    {
      type: `The weather is ${weatherData.weather[0].description}`,
      img: lobosmarinos,
      text: "Seawolf souvenir says:",
    },
    {
      type: `The temperature is${weatherData.main.temp}º today`,
      img: uhr,
      text: "Weather house says:",
    },
    {
      type: `Humidity is ${weatherData.main.humidity}%`,
      img: rodilla,
      text: "Grandma's knee says:",
    },
    {
      type: `The speed of the wind is ${weatherData.wind.speed} km/h`,
      img: windchime,
      text: "Shell windchime says:",
    },
  ];

  return (
    <div>
      <div className="forecast-container">
        <img
          src={forecastOptions[selectedInfo].img}
          alt="seahorseimage"
          className="forecast-container__image"
        />
        <div className="forecast-container__text">
          <p>{weatherData.name}</p>
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
