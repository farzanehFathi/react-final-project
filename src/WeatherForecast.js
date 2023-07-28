import React, { useState, useEffect } from "react";
import ForecastBlock from "./ForecastBlock";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(city) {
  let [forecastData, setForecastData] = useState(null);
  let [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [city]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  function getForecast() {
    let apiKey = "0c78073fed5355o034190aeb4t4430f6";
    let query = city.city;
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=${unit}`;

    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  console.log(forecastData);

  if (ready) {
    console.log(city.city);

    return (
      <div className="WeatherForecast">
        <div className="forecast-column">
          {forecastData.map(function (dailyForcast, index) {
            if (index < 5) {
              return (
                <div key={index}>
                  <ForecastBlock key={index} data={dailyForcast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    getForecast();
    return "Loading";
  }
}
