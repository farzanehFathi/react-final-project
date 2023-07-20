import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo({ data }) {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Please enter a city ..."
              autoFocus="on"
              className="form-control w-100 h-100"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="w-100 btn btn-primary"
            />
          </div>
        </div>
      </form>
      <div className="location-summary  mb-3">
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
            <img src={data.iconUrl} alt={data.description} />
          </div>
          <div className="temp">{data.temperature}</div>
          <div className="unit">°C</div>
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
