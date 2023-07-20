import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

import "./Weather.css";

export default function Weather({ city }) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      cityName: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png)",
    });
  }

  if (weatherData.ready) {
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
          <h1 className="text-capitalize">{weatherData.cityName}</h1>
          <ul>
            <li>
              <FormatDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>

        <div className="row gx-0">
          <div className="col-6 weather-summary">
            <div className="icon">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </div>
            <div className="temp">{weatherData.temperature}</div>
            <div className="unit">°C</div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "32e12816b7e874a17bd13105b642a985";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    console.log(url);
    axios.get(url).then(handleResponse);

    return `Loading...`;
  }
}
