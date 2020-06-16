import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Text } from "./Text";
afterEach(cleanup);

test("render Text content", () => {
  const { container, getByText } = render(<Text>example text</Text>);
  expect(container.firstChild).toBeInTheDocument();
  expect(getByText("example text")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});

test("render large Text", () => {
  const { container } = render(<Text large>example text</Text>);
  expect(container.firstChild).toHaveStyle("font-size: 1.5rem");
  expect(container.firstChild).toMatchSnapshot();
});

test("render bold Text", () => {
  const { container } = render(<Text bold>example text</Text>);
  expect(container.firstChild).toHaveStyle("font-weight: 700");
  expect(container.firstChild).toMatchSnapshot();
});

test("render Text with another color", () => {
  const { container, getByTestId } = render(
    <Text color="#F0F0F0">example text</Text>
  );
  expect(container.firstChild).toHaveStyle("color: #F0F0F0");
  expect(container.firstChild).toMatchSnapshot();
});
