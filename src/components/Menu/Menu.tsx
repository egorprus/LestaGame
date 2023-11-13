import React from "react";
import { useFilter } from "../../hooks/Filter/useFilter";
import { useApi } from "../../hooks/Api/useApi";
import { MenuInput } from "./components/MenuInput/MenuInput";
import { MenuButton } from "./components/MenuButton/MenuButton";
import { Pagination } from "./Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../slices";

export const Menu = () => {
  const { filtereID, itemsPerPage } = useSelector(
    (state: RootState) => state.filter
  );
  const { getFilteredList } = useApi();
  const { changePageItemLimit, changeFilteredIDs } = useFilter();

  return (
    <menu className="menu">
      <form className="form">
        <div className="form__row">
          <MenuInput
            value={filtereID}
            handleChange={changeFilteredIDs}
            placeholder="Enter name"
          />
          <MenuButton text="Filter" handleClick={getFilteredList} />
        </div>
        <div className="form__row">
          <MenuInput
            value={itemsPerPage}
            handleChange={changePageItemLimit}
            placeholder="Enter limit"
          />
        </div>
      </form>
      {/* <Pagination /> */}
    </menu>
  );
};
