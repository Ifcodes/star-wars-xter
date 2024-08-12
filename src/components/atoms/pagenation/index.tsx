import "./pagenation-styles.scss";
import clsx from "clsx";
import { memo } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface IPaginationProps {
  totalPerPage: number;
  totalItems: number;
  currentPage: number;
  handleCurrentPage: (val: number) => void;
}
const Pagenation = memo(
  ({
    totalPerPage,
    totalItems,
    currentPage,
    handleCurrentPage,
  }: IPaginationProps) => {
    const pages = Math.ceil(totalItems / totalPerPage);
    const pageList = Array(pages).fill("");

    const handleNext = () => {
      if (currentPage > pageList.length - 1) return;

      handleCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
      if (currentPage <= 1) return;

      handleCurrentPage(currentPage - 1);
    };

    return (
      <div className="pages-container">
        <button
          disabled={currentPage <= 1}
          data-testid="previous-button"
          className="border-none bg-transparent outline-none w-max p-4 hover:bg-grey1 hover:text-dark rounded-full"
          onClick={handlePrev}
        >
          <SlArrowLeft size={16} />
        </button>

        <div className="page-numbers-container hidden">
          {pageList.map((_p, idx) => (
            <button
              data-testid="page-number-button"
              onClick={() => handleCurrentPage(idx + 1)}
              className={clsx("page-number", {
                "bg-grey1 text-dark": currentPage === idx + 1,
              })}
              key={`page-${idx}-key`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <button
          data-testid="next-button"
          className="border-none bg-transparent outline-none w-max p-4 hover:bg-grey1 hover:text-dark rounded-full"
          disabled={currentPage > pageList.length - 1}
          onClick={handleNext}
        >
          <SlArrowRight size={16} />
        </button>
      </div>
    );
  }
);

export default Pagenation;
