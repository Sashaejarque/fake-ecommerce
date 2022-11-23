import { render } from "@testing-library/react";
import { expect, it, describe } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";

const mockData = ["electronics", "jewelery"];

describe("CategoryCarousel", () => {
  it("should render correctly", () => {
    const component = render(<CategoryCarousel data={mockData} />);
    expect(component).not.toBeNull();
  });

  it("should render the category name", () => {
    const { getByText } = render(<CategoryCarousel data={mockData} />);
    expect(getByText("Electronics")).toBeTruthy();
    expect(getByText("Jewelery")).toBeTruthy();
  });
});
