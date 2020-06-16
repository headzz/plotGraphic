import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Calendar } from "./Calendar";

afterEach(cleanup);

test("render calendar icon", () => {
  const { container } = render(<Calendar />);

  expect(container.firstChild).toMatchSnapshot();
});
