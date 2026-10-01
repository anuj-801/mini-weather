import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 30.25,
    humidity: 60,
    temp: 28.52,
    tempMax: 28.52,
    tempMin: 28.52,
    weather: "clear sky",
  });

  let UpdateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={UpdateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}
