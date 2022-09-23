import { useEffect, useState } from "react";

const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);

useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  });
  console.log("Latitude is:", lat);
  console.log("Longitude is:", long);
}, [lat, long]);
