import React from "react";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="app-structure">
        <Weather defaultCity="Tehran" />
        <WeatherForecast />
      </div>
      <footer>
        <small>
          <a
            href="https://github.com/farzanehFathi/react-final-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Source
          </a>{" "}
          code by Farzaneh
        </small>
      </footer>
    </div>
  );
}
