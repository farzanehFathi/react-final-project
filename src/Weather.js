import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row gx-0">
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
      <div className="location-summary mb-3">
        {" "}
        <h1>Paris</h1>
        <ul>
          <li>Sunday 13:31</li>
          <li>Clear Sky</li>
        </ul>
      </div>

      <div className="row gx-0">
        <div className="col-6 weather-summary">
          <div className="icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="clear Sky"
            />
          </div>
          <div className="temp">6</div>
          <div className="unit">°C</div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 44%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
