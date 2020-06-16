import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";

import Select from "./Select";
afterEach(cleanup);

const exampleFunction = () => {};

const DATA = [
  { id: 0, name: "1 Ano", disabled: false },
  { id: 1, name: "2 Anos", disabled: false },
];
test("behavior of select content", () => {
  const handleChange = jest.fn((param) => (param += 1));

  const { container, getByTestId } = render(
    <Select handleChange={(event) => handleChange(event)} data={DATA} />
  );

  expect(screen.getByText("1 Ano")).toBeInTheDocument();
  fireEvent.change(screen.getByTestId("select"), {
    target: { value: 1 },
  });

  expect(getByTestId("select")).toHaveTextContent("2 Anos");
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(container.firstChild).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
