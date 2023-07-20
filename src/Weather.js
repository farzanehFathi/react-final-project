import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

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
    return <WeatherInfo data={weatherData} />;
  } else {
    let apiKey = "32e12816b7e874a17bd13105b642a985";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    console.log(url);
    axios.get(url).then(handleResponse);

    return `Loading...`;
  }
}
