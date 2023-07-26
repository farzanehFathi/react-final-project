import React from "react";
import ForecastBlock from "./ForecastBlock";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "0c78073fed5355o034190aeb4t4430f6";
  let unit = "metric";
  let query = "Tehran";

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=${unit}`;

  console.log(apiUrl);
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="forecast-column">
        <ForecastBlock />
        <ForecastBlock />
        <ForecastBlock />
        <ForecastBlock />
        <ForecastBlock />
      </div>
    </div>
  );
}
