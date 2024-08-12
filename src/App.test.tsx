import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("should render all content", () => {
  const user = userEvent.setup();

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

  it("should render character list correctly", async () => {
    render(<App />);

    const listItems = await screen.findAllByTestId("character-list-item");
    // To find that the single character is in the rendered list
    const character = screen.getByText("C-3PO");
    // To find that the single character is not on the list.

    expect(listItems.length).toBe(10);
    expect(character).toBeInTheDocument();
  });

  it("should render list by pagination correctly", async () => {
    render(<App />);

    // default list test
    const listItems = await screen.findAllByTestId("character-list-item");
    expect(listItems.length).toBe(10);

    // test pagination with next button

    const nextButton = screen.getByTestId("next-button");
    await user.click(nextButton);

    const newList = await screen.findAllByTestId("character-list-item");

    expect(newList.length).toBe(2);
    expect(screen.getByText("Denver Vader")).toBeInTheDocument();
    expect(screen.getByAltText("Denver Vader")).toBeInTheDocument();

    // test pagination with previous button

    const previousButton = screen.getByTestId("previous-button");
    await user.click(previousButton);

    const previousList = await screen.findAllByTestId("character-list-item");

    expect(previousList.length).toBe(10);
  });

  it("should render page the searchbox' ", () => {
    render(<App />);

    expect(screen.getByTestId("search")).toBeInTheDocument();
  });
});
