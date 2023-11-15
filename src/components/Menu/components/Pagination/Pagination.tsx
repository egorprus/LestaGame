import React from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import { useAppDispatch } from "../../../../slices";
import { setCurrentPage } from "../../../../slices/listSlice";

interface Props {
  next: number | null;
  prev: number | null;
}
export const Pagination = ({ next, prev }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = (index: number | null) => {
    dispatch(setCurrentPage(index));
  };

  return (
    <div className="paggination">
      {prev != null && (
        <MenuButton text="prev" handleClick={() => handleClick(prev)} />
      )}
      {next && <MenuButton text="next" handleClick={() => handleClick(next)} />}
    </div>
  );
};
