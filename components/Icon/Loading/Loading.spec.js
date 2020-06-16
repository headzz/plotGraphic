import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Loading } from "./Loading";

afterEach(cleanup);

test("render Loading icon", () => {
  const { container } = render(<Loading />);
  expect(container.firstChild).toMatchSnapshot();
});
