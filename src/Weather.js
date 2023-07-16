import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="text" placeholder="Please enter a city ..." />
        <input type="submit" value="Search" />
      </form>
      <h1>Paris</h1>
      <ul>
        <li>Sunday 13:31</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6 ">
          <div className="icon">icon</div>
          <div className="temp">6</div>
          <div className="unit">C</div>
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
