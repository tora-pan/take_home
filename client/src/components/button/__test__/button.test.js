import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Button from "../Button";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

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

test("click button and check button text value", () => {
  const mockFunc = jest.fn();
  const firstText = "Load Data";
  const { getByText, rerender } = render(
    <Button buttonText={firstText} callApi={mockFunc} />
  );
  expect(getByText("Load Data").textContent).toBe("Load Data");
  fireEvent.click(getByText("Load Data"));
  expect(mockFunc).toHaveBeenCalled();
  rerender(<Button buttonText="Data Loaded" />);
  expect(getByText("Data Loaded").textContent).toBe("Data Loaded");
});

afterEach(cleanup);
