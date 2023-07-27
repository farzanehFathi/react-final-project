import React, { useState } from "react";
import ForecastBlock from "./ForecastBlock";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setForecastData({
      data: response.data,
      ready: true,
    });
  }

  function getForecast() {
    let apiKey = "0c78073fed5355o034190aeb4t4430f6";
    let unit = "metric";
    let query = "Tehran";

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=${unit}`;

    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  if (forecastData.ready) {
    return (
      <div className="WeatherForecast">
        <div className="forecast-column">
          <ForecastBlock data={forecastData.data.daily[1]} />
          <ForecastBlock data={forecastData.data.daily[2]} />
          <ForecastBlock data={forecastData.data.daily[3]} />
          <ForecastBlock data={forecastData.data.daily[4]} />
          <ForecastBlock data={forecastData.data.daily[5]} />
        </div>
      </div>
    );
  } else {
    getForecast();
  }
}
