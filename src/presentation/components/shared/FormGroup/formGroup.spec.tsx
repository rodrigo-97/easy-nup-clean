import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { FormGroup } from ".";

test("should render component without errors", () => {
  const input = <div />;
  const component = render(
    <FormGroup input={input} error={false} errorMessage="" />
  );

  expect(component).toBeDefined();
});
