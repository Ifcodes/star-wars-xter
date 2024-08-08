import "./pagenation-styles.scss";
import clsx from "clsx";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

interface IPaginationProps {
  totalPerPage: number;
  totalItems: number;
  currentPage: number;
  handleCurrentPage: (val: number) => void;
}
const Pagenation = ({
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
      <SlArrowLeft onClick={handlePrev} size={16} />

      <div className="page-numbers-container">
        {pageList.map((_p, idx) => (
          <button
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
      <SlArrowRight onClick={handleNext} size={16} />
    </div>
  );
};

export default Pagenation;
