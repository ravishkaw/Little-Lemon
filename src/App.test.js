import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Reservation from "./components/Reservation/Reservation";

describe("Reservation component", () => {
  it("renders the form initially", () => {
    const { getByLabelText, getByText } = render(<Reservation />);

    expect(getByLabelText("Name")).toBeInTheDocument();
    expect(getByLabelText("Choose date")).toBeInTheDocument();
    expect(getByLabelText("Choose time")).toBeInTheDocument();
    expect(getByLabelText("Number of guests")).toBeInTheDocument();
    expect(getByLabelText("Occasion")).toBeInTheDocument();

    expect(getByText("Make reservation")).toBeInTheDocument();
  });

  it("submits the form with valid data", () => {
    const { getByLabelText, getByText } = render(<Reservation />);

    fireEvent.change(getByLabelText("Name"), { target: { value: "John Doe" } });
    fireEvent.change(getByLabelText("Choose date"), {
      target: { value: "2022-12-31" },
    });
    fireEvent.change(getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(getByLabelText("Occasion"), {
      target: { value: "Birthday" },
    });

    fireEvent.click(getByText("Make reservation"));
  });
});
