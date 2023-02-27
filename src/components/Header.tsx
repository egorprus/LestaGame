import React, { Dispatch, SetStateAction, useState } from 'react';
import { Pagination } from './Pagination';
import { MetaDataInterface } from '../types';

interface HeaderProps {
    filtering: boolean,
    handleFilter: (value: string) => void,
    resetFilter: () => void,
    meta: MetaDataInterface | null,
    setCurrentPage: Dispatch<SetStateAction<number>>,
    setPageItemLimit: (value: number) => void,
    currentPage: number,
    isNoResult: boolean
};

export const Header = (props: HeaderProps) => {
    const {
        filtering,
        handleFilter,
        resetFilter,
        meta,
        setCurrentPage,
        setPageItemLimit,
        currentPage,
        isNoResult
    } = props;
    const [filterInputValue, setFilterInputValue] = useState<string>('');
    const [itemsPerPageInputValue, setItemPerPageInputValue] = useState<number>(1);

    const resetFilterInputValue = () => {
      if (filterInputValue) {
          setFilterInputValue('');
      }
      resetFilter();
    };

    return (
    <header className="header">
        <div className="header__item">
          <label htmlFor="itemPerPage" className="header__label">
            <input className="header__input" type="text" value={filterInputValue} onChange={(e) => setFilterInputValue(e.target.value)} />
          </label>
          <button className="header__btn" type="button" onClick={() => handleFilter(filterInputValue)}>Filter</button>
          {filtering && 
            <button className="header__btn" type="button" onClick={() => resetFilterInputValue()}>Reset</button>
          }
        </div>
        {!isNoResult &&
          <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={meta?.page_total || 1} />
        }
        <div className="header__item">
          <label htmlFor="itemPerPage" className="header__label">
            <input name="itemPerPage" className="header__input" type="text" onChange={(e) => setItemPerPageInputValue(Number(e.target.value))} />
            <span>Change the number of result</span>
          </label>
          <button className="header__btn" type="button" onClick={() => setPageItemLimit(itemsPerPageInputValue)}>Edit</button>
        </div>
    </header>)
};