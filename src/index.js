import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import forecastInformation from "./data/forecast.json";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App
      forecasts={forecastInformation.forecasts}
      location={forecastInformation.location}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
