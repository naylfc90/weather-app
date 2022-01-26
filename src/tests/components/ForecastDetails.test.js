import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    temperature: {
      min: 12,
      max: 22,
    },
    humidity: 30,
    wind: {
      speed: 20,
      direction: "n",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("render correct values for props", () => {
    const { getByTestId } = render(<ForecastDetails forecast={validProps} />);

    expect(getByTestId("forecast-date")).toHaveClass("forecast-details__date");
    expect(getByTestId("forecast-temperature")).toHaveClass(
      "forecast-details__temperature"
    );
  });
});
