import { render, screen } from "@testing-library/react";
import ThemeSwitch from ".";

describe("test button render and actions", () => {
  it("should render button", () => {
    render(<ThemeSwitch />);
    expect(screen.getByTestId("theme-toggle-button")).toBeInTheDocument();
  });

  it("should render 'Switch to Light' as button text by default", () => {
    render(<ThemeSwitch />);

    expect(screen.getByTestId("theme-toggle-button")).toHaveTextContent(
      "Switch to Light"
    );
  });
});
