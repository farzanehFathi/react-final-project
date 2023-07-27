import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function ForecastBlock({ data }) {
  function maxTemp() {
    return Math.round(data.temperature.maximum);
  }

  function minTemp() {
    return Math.round(data.temperature.minimum);
  }

  function forecastDay() {
    let dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let time = new Date(data.time * 1000);
    let dayNum = time.getDay();
    let day = dayList[dayNum];
    return day;
  }

  function forecastIcon(iconCode) {
    let codeMapping = {
      "clear-sky-day": "CLEAR_DAY",
      "few-clouds-day": "PARTLY_CLOUDY_DAY",
      "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
      "broken-clouds-day": "CLOUDY",
      "shower-rain-day": "SLEET",
      "rain-day": "RAIN",
      "thunderstorm-day": "RAIN",
      "snow-day": "SNOW",
      "mist-day": "FOG",

      "clear-sky-night": "CLEAR_NIGHT",
      "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
      "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
      "broken-clouds-night": "CLOUDY",
      "shower-rain-night": "SLEET",
      "rain-night": "RAIN",
      "thunderstorm-night": "RAIN",
      "snow-night": "SNOW",
      "mist-night": "FOG",
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

  return (
    <div className="forecast-block">
      <div className="forecast-day">{forecastDay()}</div>
      <div className="forecast-icon">{forecastIcon(data.condition.icon)}</div>
      <div className="forecast-temp">
        {" "}
        <span className="temp-max">{maxTemp()}°</span>
        <span className="temp-min">{minTemp()}°</span>
      </div>
    </div>
  );
}
