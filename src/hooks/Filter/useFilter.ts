import { ChangeEvent, useCallback } from "react";
import {
  setFilterInputValue,
  setPageItemLimit,
  setFilterStatus,
} from "../../slices/filterSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../slices";

type THook = {
  changeFilteredIDs: (e: ChangeEvent<HTMLInputElement>) => void;
  changePageItemLimit: (e: ChangeEvent<HTMLInputElement>) => void;
  changeFilterStatus: () => void;
};

export const useFilter = (): THook => {
  const dispatch = useAppDispatch();
  const { filtering } = useSelector((state: RootState) => state.filter);

  const changeFilteredIDs = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setFilterInputValue(e.target.value));
    },
    [dispatch]
  );

  const changePageItemLimit = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setPageItemLimit(e.target.value));
    },
    [dispatch]
  );

  const changeFilterStatus = useCallback(() => {
    dispatch(setFilterStatus(!filtering));
  }, [dispatch, filtering]);

  return { changeFilteredIDs, changePageItemLimit, changeFilterStatus };
};
