import { DEFAULT_LIMIT_PER_PAGE } from "../constant/constant";

const getPrevPageIndex = (currentIndex: number) =>
  currentIndex ? currentIndex - DEFAULT_LIMIT_PER_PAGE : null;

const getNextPageIndex = (currentIndex: number, maxLength: number) =>
  currentIndex + DEFAULT_LIMIT_PER_PAGE < maxLength
    ? currentIndex + DEFAULT_LIMIT_PER_PAGE
    : null;

export const getNextPrevPagesIndex = (
  currentIndex: number,
  maxLength: number
) => {
  return {
    prev: getPrevPageIndex(currentIndex),
    next: getNextPageIndex(currentIndex, maxLength),
  };
};
