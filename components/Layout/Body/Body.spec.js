import React from "react";
import { render, cleanup } from "@testing-library/react";
import Body from "./Body";

afterEach(cleanup);

test("render layout body", () => {
  const { container } = render(
    <Body>
      <div>1</div>
    </Body>
  );
  expect(container.firstChild).toHaveStyle("width: 100%");
  expect(container.firstChild).toMatchSnapshot();
});
