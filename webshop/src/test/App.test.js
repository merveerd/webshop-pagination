import React from "react";
import App from "../App";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<App />);
});
// test('renders learn react link', () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});
