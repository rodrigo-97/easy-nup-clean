import { dark } from "@/presentation/themes/dark";
import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { describe, expect, it, vi } from "vitest";
import { Scaffold } from ".";

describe("test scaffold", () => {
  it("should render scaffold without errors", () => {
    const title = "any_title";
    const body = <div />;
    const component = render(
      <ThemeProvider theme={dark}>
        <Scaffold body={body} title={title} />
      </ThemeProvider>,
      {
        wrapper: BrowserRouter,
      }
    );

    expect(component).toBeDefined();
  });

  it("should execute handleGoBack", () => {
    const handleGoBack = vi.fn();

    const body = <div />;
    const title = "any_title";

    const { getByAltText } = render(
      <ThemeProvider theme={dark}>
        <Scaffold body={body} title={title} />
      </ThemeProvider>,
      {
        wrapper: BrowserRouter,
      }
    );

    const goBackLink = getByAltText("go-back");

    fireEvent.click(goBackLink);

    expect(handleGoBack).toHaveBeenCalledTimes(1);
  });
});
