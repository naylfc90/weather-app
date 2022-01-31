/* eslint-disable no-console */
import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "http://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  } else {
    endpoint += `?city=liverpool`;
  }

  axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city, try again!");
        console.log("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oops, server error, try again later.");
        console.log("Server error", error);
      }
    });
};

export default getForecast;
