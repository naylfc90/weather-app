import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

import forecastInformation from "../data/forecast.json";

test("renders the App", () => {
  render(
    <App
      location={forecastInformation.location}
      forecasts={forecastInformation.forecasts}
    />
  );
  const header = screen.getByText(/Manchester, UK/i);
  expect(header).toBeInTheDocument();
});
