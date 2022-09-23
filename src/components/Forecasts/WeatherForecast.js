const WeatherForecast = ({ weatherData }) => {
  return <p>{weatherData.weather[0].description}</p>;
};

export default WeatherForecast;
