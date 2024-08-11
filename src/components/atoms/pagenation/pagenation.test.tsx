import { render, screen } from "@testing-library/react";
import Pagenation from ".";
import userEvent from "@testing-library/user-event";

describe("should render pages and buttons", () => {
  const totalItems = 20;
  const totalPerPage = 10;
  const handleCurrentPage = vi.fn();

  beforeEach(() => {
    handleCurrentPage.mockClear();
  });

  it("should render correct number of pages", () => {
    render(
      <Pagenation
        totalItems={totalItems}
        totalPerPage={totalPerPage}
        currentPage={1}
        handleCurrentPage={handleCurrentPage}
      />
    );

    const totalPages = Math.ceil(totalItems / totalPerPage);
    const pageButtons = screen.getAllByRole("button");

    expect(pageButtons.length).toBe(totalPages);
  });

  it("should handle next and previous  button click correctly", async () => {
    render(
      <Pagenation
        totalItems={totalItems}
        totalPerPage={totalPerPage}
        currentPage={1}
        handleCurrentPage={handleCurrentPage}
      />
    );

    // previ
    const previous = screen.getByRole("previous-button");
    await userEvent.click(previous);

    expect(handleCurrentPage).not.toHaveBeenCalledWith(2);
  });
});

describe("should handle next and previous  button click correctly", () => {
  const totalItems = 20;
  const totalPerPage = 10;
  const handleCurrentPage = vi.fn();

  beforeEach(() => {
    handleCurrentPage.mockClear();
  });

  it("should disable previous button", async () => {
    render(
      <Pagenation
        totalItems={totalItems}
        totalPerPage={totalPerPage}
        currentPage={1}
        handleCurrentPage={handleCurrentPage}
      />
    );

    // previ
    const previous = screen.getByRole("previous-button");
    await userEvent.click(previous);

    expect(handleCurrentPage).not.toHaveBeenCalled();
  });
});
