import React, { useState, useEffect } from "react";
import ForecastBlock from "./ForecastBlock";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(query) {
  const [forecastData, setForecastData] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [query]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setReady(true);
  }

  function getForecast() {
    let apiKey = "0c78073fed5355o034190aeb4t4430f6";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=${unit}`;

    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  console.log(forecastData);

  if (ready) {
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
  }
}
