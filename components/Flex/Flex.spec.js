import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Flex } from "./Flex";
afterEach(cleanup);

test("render flex content", () => {
  const { container, getByTestId } = render(
    <Flex>
      <div>1</div>
      <div>2</div>
    </Flex>
  );
  expect(getByTestId("flex")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});

test("render flex-content center", () => {
  const { container, getByTestId } = render(
    <Flex center>
      <div>1</div>
      <div>2</div>
    </Flex>
  );
  expect(getByTestId("flex")).toHaveStyle("justify-content: center");
  expect(container.firstChild).toMatchSnapshot();
});

test("render flex-content right", () => {
  const { container, getByTestId } = render(
    <Flex right>
      <div>1</div>
      <div>2</div>
    </Flex>
  );
  expect(getByTestId("flex")).toHaveStyle("justify-content: flex-end");
  expect(container.firstChild).toMatchSnapshot();
});

test("render flex-content spaceBetween", () => {
  const { container, getByTestId } = render(
    <Flex spaceBetween>
      <div>1</div>
      <div>2</div>
    </Flex>
  );
  expect(getByTestId("flex")).toHaveStyle("justify-content: space-between");
  expect(container.firstChild).toMatchSnapshot();
});
