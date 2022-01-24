import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { location, forecasts } from "./data/forecast.json";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App forecasts={forecasts} location={location} />
  </React.StrictMode>,
  document.getElementById("root")
);
