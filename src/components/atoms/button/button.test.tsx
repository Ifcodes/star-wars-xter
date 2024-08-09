import { render, screen } from "@testing-library/react";
import Button from ".";

describe("", () => {
  it("should render button text", () => {
    render(<Button>Hello</Button>);

    expect(screen.getByRole("button")).toHaveTextContent("Hello");
  });
});
