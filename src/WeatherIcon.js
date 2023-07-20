import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon({ iconCode }) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "02d": "PARTLY_CLOUDY_DAY",
    "03d": "PARTLY_CLOUDY_DAY",
    "04d": "CLOUDY",
    "10d": "RAIN",
    "09d": "SLEET",
    "13d": "SNOW",
    "50d": "FOG",

    "01n": "CLEAR_NIGHT",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04n": "CLOUDY",
    "10n": "RAIN",
    "09n": "SLEET",
    "13n": "SNOW",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[iconCode]}
      color={"rgb(33, 33, 33)"}
      size={52}
      animate={true}
    />
  );
}
