import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../Button";


test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

test("button renders correctly", () => {
  const { getByTestId } = render(<Button label="Load Data" />);
  const button = getByTestId("button-id");
  expect(button).toHaveAttribute("data-testid", "button-id");
  expect(button).toHaveClass("button");
});


