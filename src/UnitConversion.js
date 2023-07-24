import React, { useState } from "react";

export default function UnitConversion({ data }) {
  const [unit, setUnit] = useState("metric");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  if (unit === "metric") {
    return (
      <span className="unitConversion">
        <span className="temp">{data.temperature}</span>
        <span className="unit">
          °C |<span onClick={showFahrenheit}>°F</span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="unitConversion">
        <span className="temp">
          {Math.round((data.temperature * 9) / 5 + 32)}
        </span>
        <span className="unit">
          {" "}
          <span onClick={showCelsius}>°C</span> | °F
        </span>
      </span>
    );
  }
}
