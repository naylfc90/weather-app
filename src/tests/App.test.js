import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

import location from "../data/forecast.json";

test("renders the App", () => {
  render(<App location={location.location} />);
  const header = screen.getByText(/Weather App/i);
  expect(header).toBeInTheDocument();
});
