import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import "../styles/ForecastDetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, temperature, humidity, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date" data-testid="forecast-date">
        <h2>{moment(date).format("ddd Do MMM")}</h2>
      </div>

      <div
        className="forecast-details__temperature"
        data-testid="forecast-temperature"
      >
        Max Temperature: {temperature.max}
        &deg;C
        <br />
        Min Temperature: {temperature.min}
        &deg;C
      </div>

      <div className="forecast-details__humidity">Humidity: {humidity}</div>

      <div className="forecast-details__wind">
        Wind Speed: {wind.speed}
        <br />
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ForecastDetails;
