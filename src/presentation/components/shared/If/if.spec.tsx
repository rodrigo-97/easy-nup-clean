import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { If } from ".";

test("should render component without errors", () => {
  const component = render(<If condition={true} then={<div />} />);

  expect(component).toBeDefined();
});

test("should render component without errors and having else component", () => {
  const component = render(
    <If condition={false} then={<div />} else={<div />} />
  );

  expect(component).toBeDefined();
});
