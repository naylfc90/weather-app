import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let endpoint = "http://mcr-codes-weather-app.herokuapp.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  } else {
    endpoint += `?city=liverpool`;
  }

  axios.get(endpoint).then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  });
};

export default getForecast;
