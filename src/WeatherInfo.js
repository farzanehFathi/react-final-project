import React from "react";
import "./WeatherInfo.css";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <div className="location-summary mb-5">
        {" "}
        <h1 className="text-capitalize">{data.cityName}</h1>
        <ul>
          <li>
            <FormatDate date={data.date} />
          </li>
          <li className="text-capitalize">{data.description}</li>
        </ul>
      </div>

      <div className="row gx-0">
        <div className="col-6 weather-summary">
          <div className="icon">
            <WeatherIcon iconCode={data.icon} />
          </div>
          <UnitConversion data={data} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {data.humidity}%</li>
            <li>Wind: {data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
