import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastBlock() {
  return (
    <div className="forecast-block">
      <div className="forecast-day">Wed</div>
      <div className="forecast-icon">
        <WeatherIcon iconCode={"01d"} />
      </div>
      <div className="forecast-temp">
        {" "}
        <span className="temp-max">42</span>
        <span className="temp-min">32</span>
      </div>
    </div>
  );
}
