import "./WeatherOptionsMenu.css";

const WeatherOptionsMenu = (props) => {
  const buttonHandler = (event) => {
    //const selected = event.target.value;
    //console.log(selected);
    props.onClickButton(event.target.value);
    console.log("event.target.value is:" + event.target.value);
  };

  return (
    <div className="weathermenu__container">
      <button onClick={buttonHandler} value="0" className="weathermenu_item">
        Weather
      </button>
      <button onClick={buttonHandler} value="1" className="weathermenu_item">
        Temperature
      </button>
      <button onClick={buttonHandler} value="2" className="weathermenu_item">
        Humidity
      </button>
      <button onClick={buttonHandler} value="3" className="weathermenu_item">
        Winds
      </button>
    </div>
  );
};
export default WeatherOptionsMenu;
