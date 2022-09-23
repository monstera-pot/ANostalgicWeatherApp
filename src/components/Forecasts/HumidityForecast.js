const HumidityForecast = ({ weatherData }) => {
  return <p>The humidity is {weatherData.main.humidity} </p>;
};

export default HumidityForecast;
