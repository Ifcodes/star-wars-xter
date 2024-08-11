import { render, screen } from "@testing-library/react";
import App from "./App";

describe("should render all content", () => {
  it("should render logo", () => {
    render(<App />);

    expect(screen.getByAltText("star wars logo")).toBeInTheDocument();
  });

  it("should render theme switch button", () => {
    render(<App />);

    expect(screen.getByTestId("theme-toggle-button")).toBeInTheDocument();
  });

  it("should render theme switch button", () => {
    render(<App />);

    expect(screen.getByTestId("theme-toggle-button")).toBeInTheDocument();
  });

  it("should render title 'Characters' ", () => {
    render(<App />);

    expect(screen.getByTestId("page-title")).toBeInTheDocument();
    expect(screen.getByTestId("page-title")).toHaveTextContent("Characters");
  });

  it("should render page description with text 'Here are your favourite star wars character.' ", () => {
    render(<App />);

    expect(screen.getByTestId("page-description")).toBeInTheDocument();
    expect(screen.getByTestId("page-description")).toHaveTextContent(
      "Here are your favourite star wars character."
    );
  });

  it("should render page the searchbox' ", () => {
    render(<App />);

    expect(screen.getByTestId("search")).toBeInTheDocument();
  });
});
