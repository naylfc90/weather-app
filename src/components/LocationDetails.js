import React from "react";
import PropTypes from "prop-types";

import "../styles/LocationDetails.css";

const LocationDetails = (props) => {
  const { city, country } = props;
  return (
    <div className="location-details">
      <h1 className="location-details__header">{`${city}, ${country}`}</h1>
    </div>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
