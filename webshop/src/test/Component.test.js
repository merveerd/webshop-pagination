import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ItemTypes from "../components/Options/ItemTypes";

describe("Component: ItemTypes", () => {
  const { getByText } = render(<ItemTypes />);
  const onClick = jest.fn();
  it("should render the right item types", async () => {
    const mugButton = getByText("mug");
    fireEvent.click(mugButton);
    expect(onClick).toHaveBeenCalled();
  });
});
