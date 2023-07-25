import React from "react";
import ForecastBlock from "./ForecastBlock";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
