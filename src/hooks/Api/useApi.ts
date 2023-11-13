import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../slices";
import { fetchList, saveList } from "../../slices/listSlice";
import { parseName } from "../../utils/utils";
import { useCallback } from "react";
import { apiCall } from "../../utils/apiCall";
import { ResponseRequest } from "../../models/types";

type THook = {
  getList: () => void;
  getFilteredList: () => void;
};

export const useApi = (): THook => {
  const dispatch = useAppDispatch();

  const { list } = useSelector((state: RootState) => state.list);
  const { filtereID, itemsPerPage, currentPage } = useSelector(
    (state: RootState) => state.filter
  );

  const getList = useCallback(() => {
    dispatch(
      fetchList({
        itemsPerPage,
        currentPage,
      })
    );
  }, [dispatch, itemsPerPage, currentPage]);

  const getFilteredList = useCallback(async () => {
    if (filtereID) {
      const response = await apiCall({ itemsPerPage: "100", currentPage: 1 });
      const data: ResponseRequest = await response.json();
      const filterList = Object.values(data.data).filter((item) => item);

      const filteredList = filterList.filter(
        (option) => parseName(option.name).indexOf(filtereID) === 0
      );
      let limitedIdList = "";

      if (filteredList.length) {
        limitedIdList = filteredList[0].tank_id;

        for (let i = 1; i < filteredList.length - 1 && i < 100; i++) {
          limitedIdList = limitedIdList + `%2C${filteredList[i].tank_id}`;
        }
      }
      console.log(filteredList, "filter");
      saveList(filteredList);
    }
  }, [filtereID]);

  return { getFilteredList, getList };
};
