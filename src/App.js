import "./App.css";
import Header from "./components/Header";
import ForecastContainer from "./components/ForecastContainer";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [long, setLong] = useState([]);
  const [lat, setLat] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    };
    fetchData();
    console.log("Latitude is:", lat);
    console.log("Longitude is:", long);
  }, [lat, long]);

  return (
    <div>
      <Header weatherData={data} />
      {typeof data.main != "undefined" ? (
        <ForecastContainer weatherData={data} />
      ) : (
        <div></div>
      )}
      <Footer />
    </div>
  );
}

export default App;
