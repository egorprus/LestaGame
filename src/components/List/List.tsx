import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../slices";
import { ListContent } from "./ListContent/ListContent";
import { setFilteredList } from "../../slices/listSlice";
import { FilterProperty } from "../../models/types";
import { FilterOptions } from "../../models/enums";

interface Props {
  loading: boolean;
}

export const List = ({ loading }: Props) => {
  const dispatch = useAppDispatch();
  const { currentPage, list, filter } = useSelector(
    (state: RootState) => state.list
  );

  useEffect(() => {
    const filterProperty: FilterProperty = Object.keys(
      filter
    )[0] as FilterProperty;
    if (filterProperty) {
      const filteredList = list.filter((ship) => {
        if (filterProperty === FilterOptions.level) {
          return ship[filterProperty].toString() === filter[filterProperty];
        } else {
          return (
            ship[filterProperty].toString().toLowerCase()[0] ===
            filter[filterProperty]?.toLowerCase()
          );
        }
      });
      dispatch(setFilteredList(filteredList));
    } else {
      dispatch(setFilteredList(list));
    }
  }, [dispatch, filter, list]);
	console.log(loading, 'loading')
  return (
    <div className="list-wrapper">
      {loading ? (
				<div className="spinner">
	        <h2 className="list__title">loading...</h2>
				</div>
      ) : (
        <ListContent
          list={currentPage}
          filterValue={Object.keys(filter)[0] as FilterProperty}
        />
      )}
    </div>
  );
};
