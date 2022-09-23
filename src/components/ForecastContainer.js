import "./ForecastContainer.css";
import WeatherOptionsMenu from "./WeatherOptionsMenu";
import { useState } from "react";
import forecastOptions from "../shared/forecastOptions";
import WeatherForecast from "./Forecasts/WeatherForecast";
import HumidityForecast from "./Forecasts/HumidityForecast";
import TempForecast from "./Forecasts/TempForecast";
import WindForecast from "./Forecasts/WindForecast";

const ForecastContainer = ({ weatherData }) => {
  const [selectedInfo, setSelectedInfo] = useState(0);
  const selectedInfoHandler = (selected) => {
    setSelectedInfo(selected);
  };

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
          {(selectedInfo === 0 && (
            <WeatherForecast weatherData={weatherData} />
          )) ||
            (selectedInfo === 1 && (
              <TempForecast weatherData={weatherData} />
            )) ||
            (selectedInfo === 2 && (
              <HumidityForecast weatherData={weatherData} />
            )) ||
            (selectedInfo === 3 && (
              <WindForecast weatherData={weatherData} />
            )) || <div></div>}
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
