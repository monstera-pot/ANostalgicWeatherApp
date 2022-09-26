import "./WeatherOptionsMenu.css";

const WeatherOptionsMenu = (props) => {
  const buttonHandler = (event) => {
    props.onClickButton(event.target.value);
    console.log("event.target.value is:" + event.target.value);
  };

  return (
    <div className="weathermenu__container">
      <button onClick={buttonHandler} value="0" className="weathermenu_btn">
        Weather
      </button>
      <button onClick={buttonHandler} value="1" className="weathermenu_btn">
        Temperature
      </button>
      <button onClick={buttonHandler} value="2" className="weathermenu_btn">
        Humidity
      </button>
      <button onClick={buttonHandler} value="3" className="weathermenu_btn">
        Winds
      </button>
    </div>
  );
};
export default WeatherOptionsMenu;
