import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../slices";
import { Pagination } from "./components/Pagination/Pagination";
import { FilterOptions } from "../../models/enums";
import { setFilterValue } from "../../slices/listSlice";
import { getNextPrevPagesIndex } from "../../utils";
import { MenuItem } from "./components/MenuItem/MenuItem";
import { FilterProperty } from "../../models/types";

type PagesT = {
	prev: number | null,
	next: number | null,
}

export const Menu = () => {
  const dispatch = useAppDispatch();
  const { indexCurrentPage, filteredList, filter } = useSelector(
    (state: RootState) => state.list
  );
  const [pages, setPages] = useState<PagesT>(
    getNextPrevPagesIndex(indexCurrentPage, filteredList.length)
  );
  const [filterInputs, setFilterInputs] = useState<
    Partial<Record<FilterProperty, string>>
  >({});

  useEffect(() => {
    setPages(getNextPrevPagesIndex(indexCurrentPage, filteredList.length));
  }, [indexCurrentPage, filteredList.length]);

  const handleClick = useCallback(
    (filter: FilterOptions) => {
      if (filter === FilterOptions.default) {
        dispatch(setFilterValue({}));
        setFilterInputs({});
      } else {
        dispatch(setFilterValue(filterInputs));
      }
    },
    [filterInputs, dispatch]
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    key: FilterOptions
  ) => {
    setFilterInputs({ [key]: event.target.value });
  };

  return (
    <menu className="menu">
      <div className="filter">
        <ul className="filter-list">
          <MenuItem
            option={FilterOptions.default}
            handleClick={() => handleClick(FilterOptions.default)}
          />
          <MenuItem
            isActive={Object.keys(filter)[0] === FilterOptions.level}
            option={FilterOptions.level}
            handleClick={() => handleClick(FilterOptions.level)}
            value={filterInputs.level}
            handleChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, FilterOptions.level)
            }
          />
          <MenuItem
            isActive={Object.keys(filter)[0] === FilterOptions.nation}
            option={FilterOptions.nation}
            handleClick={() => handleClick(FilterOptions.nation)}
            value={filterInputs.nation}
            handleChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, FilterOptions.nation)
            }
          />
          <MenuItem
            isActive={Object.keys(filter)[0] === FilterOptions.type}
            option={FilterOptions.type}
            handleClick={() => handleClick(FilterOptions.type)}
            value={filterInputs.type}
            handleChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, FilterOptions.type)
            }
          />
        </ul>
      </div>
      <Pagination next={pages.next} prev={pages.prev} />
    </menu>
  );
};
