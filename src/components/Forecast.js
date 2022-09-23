const Forecast = (props) => {
  // const weatherForecast = weatherData.weather[0].description;
  // const temperatureForecast = weatherData.main.temp;
  // const humidityForecast = weatherData.main.humidity;
  // const windForecast = weatherData.wind.speed;
  if (props.selectedInfo === 0) {
    let forecast = props.weatherData.weather[0].description;
  } else if (props.selectedInfo === 1) {
    let forecast = props.weatherData.main.temp;
  } else if (props.selectedInfo === 2) {
    let forecast = props.weatherData.main.humidity;
  } else {
    let forecast = props.weatherData.wind.speed;
  }

  return (

  );
};

export default Forecast;
