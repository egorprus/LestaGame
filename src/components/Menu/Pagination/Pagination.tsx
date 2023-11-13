import React, { useMemo } from "react";
import { createPaginationButtonsIndexes } from "../../../utils/utils";
import { PaginationButton } from "./components/PaginationButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../slices";

export const Pagination = () => {
  const { currentPage, totalPages } = useSelector(
    (state: RootState) => state.filter
  );
  const pageNumbers: number[] = useMemo(
    (): number[] => createPaginationButtonsIndexes(currentPage, totalPages),
    [totalPages, currentPage]
  );

  return (
    <div className="menu__item">
      <ul className="pagination">
        {pageNumbers.map((number: number) => (
          <li
            key={number}
            className={`pagination__item ${
              number === currentPage && "pagination__item-active"
            }`}
          >
            <PaginationButton number={number} isActive={number === currentPage} />
          </li>
        ))}
      </ul>
    </div>
  );
};
