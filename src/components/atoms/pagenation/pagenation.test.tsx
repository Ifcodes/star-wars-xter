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
    const pageButtons = screen.getAllByTestId("page-number-button");

    expect(pageButtons.length).toBe(totalPages);
  });
});

describe("should handle next and previous  button click correctly", () => {
  const totalItems = 20;
  const totalPerPage = 10;
  const handleCurrentPage = vi.fn();
  const user = userEvent.setup();

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

    const previous = screen.getByTestId("previous-button");
    await user.click(previous);

    expect(handleCurrentPage).not.toHaveBeenCalled();
  });

  it("should call next handler correctly", async () => {
    render(
      <Pagenation
        totalItems={totalItems}
        totalPerPage={totalPerPage}
        currentPage={1}
        handleCurrentPage={handleCurrentPage}
      />
    );

    const next = screen.getByTestId("next-button");
    await user.click(next);
    expect(handleCurrentPage).toHaveBeenCalledWith(2);
  });

  it("should call previous button correctly", async () => {
    render(
      <Pagenation
        totalItems={totalItems}
        totalPerPage={totalPerPage}
        currentPage={2}
        handleCurrentPage={handleCurrentPage}
      />
    );

    const previous = screen.getByTestId("previous-button");
    await user.click(previous);
    expect(handleCurrentPage).toHaveBeenCalledWith(1);
  });

  it("should disable next button", async () => {
    render(
      <Pagenation
        totalItems={totalItems}
        totalPerPage={totalPerPage}
        currentPage={Math.ceil(totalItems / totalPerPage)}
        handleCurrentPage={handleCurrentPage}
      />
    );

    const next = screen.getByTestId("next-button");
    await user.click(next);

    expect(handleCurrentPage).not.toHaveBeenCalled();
  });
});
