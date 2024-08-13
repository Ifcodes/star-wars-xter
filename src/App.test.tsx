import { act, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { server } from "./mocks/server";
import { HttpResponse, http } from "msw";
import { charactersData } from "./mocks/mock-data";
import { delay } from "./utils/helpers";

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

  it("should render the searchbox' ", () => {
    render(<App />);

    expect(screen.getByTestId("search")).toBeInTheDocument();
  });

  it("should render search results", async () => {
    render(<App />);

    const searchInput = screen.getByTestId("search");
    await act(async () => {
      await userEvent.type(searchInput, "Luke");
      await delay(1000); // wait 1 second for debounce effect
    });

    expect(searchInput).toHaveValue("Luke");
    const result = screen.queryAllByTestId("character-list-item");

    expect(result).toHaveLength(1);
    expect(screen.getByAltText("Luke Skywalker")).toBeInTheDocument();
  });

  it("should render No Record error message", async () => {
    server.use(
      http.get("https://swapi.dev/api/people", () => {
        return HttpResponse.json(
          { ...charactersData, results: [] },
          { status: 200 }
        );
      })
    );

    render(<App />);

    expect(await screen.findByText("No record found")).toBeInTheDocument();
  });

  it("should render network error message", async () => {
    server.use(
      http.get("https://swapi.dev/api/people", () => {
        return HttpResponse.error();
      })
    );

    render(<App />);

    expect(
      await screen.findByText(
        "Opps! Something went wrong. Please check your network connection"
      )
    ).toBeInTheDocument();
  });

  it("should open modal on card click", async () => {
    render(<App />);

    await screen.findAllByTestId("character-list-item");
    // To find that the single character is in the rendered list
    const character = screen.getByText("C-3PO");
    await user.click(character);

    expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
  });

  it("should render character details on modal correctly", async () => {
    render(<App />);

    await screen.findAllByTestId("character-list-item");

    // To find that the single character is in the rendered list
    const character = screen.getByText("C-3PO");
    await user.click(character);

    expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
    expect(screen.getByTestId("character-name")).toBeInTheDocument();
    expect(screen.getByTestId("character-name")).toHaveTextContent("C-3PO");
    expect(screen.getByTestId("character-details-img")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toBeInTheDocument();
  });
});
