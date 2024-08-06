import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeSwitch from ".";

describe("test button render and actions", () => {
  it("should render button", () => {
    render(<ThemeSwitch />);
    expect(screen.getByTestId("theme-toggle-button")).toBeInTheDocument();
  });

  it("should render 'Switch to light' as button text by default", () => {
    render(<ThemeSwitch />);

    expect(screen.getByTestId("theme-toggle-button")).toHaveTextContent(
      "Switch to light"
    );
  });

  it("should render 'Switch to dark' after click", async () => {
    render(<ThemeSwitch />);

    const user = userEvent.setup();

    expect(screen.getByTestId("theme-toggle-button")).toHaveTextContent(
      "Switch to light"
    );

    await user.click(screen.getByTestId("theme-toggle-button"));

    expect(screen.getByTestId("theme-toggle-button")).toHaveTextContent(
      "Switch to dark"
    );
  });
});
