import lobosmarinos from "../images/lobosmarinos.png";
import rodilla from "../images/rodilla.jpg";
import uhr from "../images/Uhr.jpg";
import windchime from "../images/windchime.jpg";

const forecastOptions = [
  {
    type: "weatherData.weather[0].description",
    img: lobosmarinos,
    text: "Seawolf souvenir says:",
  },
  {
    type: "weatherData.main.temp",
    img: uhr,
    text: "Weather house says:",
  },
  {
    type: "weatherData.main.humidity",
    img: rodilla,
    text: "Grandma's knee says:",
  },
  {
    type: "weatherData.wind.speed",
    img: windchime,
    text: "Shell windchime says:",
  },
];

export default forecastOptions;
