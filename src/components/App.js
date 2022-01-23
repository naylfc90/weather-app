import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import "../styles/App.css";
import ForecastSummary from "./ForecastSummary";

const App = ({ location }) => {
  const { city, country } = location;
  return (
    <div className="mainApp">
      <h1 className="mainApp__header">Weather App</h1>
      <LocationDetails city={city} country={country} />
      <ForecastSummary />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
