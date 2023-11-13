import React from "react";
import { setCurrentPage } from "../../../../slices/filterSlice";
import { useAppDispatch } from "../../../../slices";

interface PaginationButtonProps {
  number: number;
	isActive: boolean;
}

export const PaginationButton = ({ number, isActive }: PaginationButtonProps) => {
  const dispatch = useAppDispatch();

  const setPage = (currentPage: number = 0) => {
    dispatch(setCurrentPage(currentPage));
  };

  return (
    <button
      className="pagination__btn"
      type="button"
      onClick={() => setPage(number)}
			disabled={isActive}
    >
      {number}
    </button>
  );
};
