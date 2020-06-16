import React from "react";
import { render, cleanup } from "@testing-library/react";
import Wrapper from "./Wrapper";

afterEach(cleanup);

test("render layout Wrapper", () => {
  const { container } = render(
    <Wrapper>
      <div>1</div>
    </Wrapper>
  );
  expect(container.firstChild).toHaveStyle("padding: 2rem 4rem");
  expect(container.firstChild).toMatchSnapshot();
});
