import lobosmarinos from "../images/lobosmarinos.png";
import rodilla from "../images/rodilla.jpg";
import uhr from "../images/Uhr.jpg";
import windchime from "../images/windchime.jpg";

const forecastOptions = [
  {
    // type: `The weather is ${weatherData.weather[0].description}`,
    img: lobosmarinos,
    text: "Seawolf souvenir says:",
  },
  {
    // type: `The temperature is${weatherData.main.temp}º today`,
    img: uhr,
    text: "Weather house says:",
  },
  {
    // type: `Humidity is ${weatherData.main.humidity}%`,
    img: rodilla,
    text: "Grandma's knee says:",
  },
  {
    // type: `The speed of the wind is ${weatherData.wind.speed} km/h`,
    img: windchime,
    text: "Shell windchime says:",
  },
];

export default forecastOptions;
