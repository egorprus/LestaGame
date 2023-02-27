import React, { useMemo } from 'react';
import { DEFAULT_PAGE } from '../constant/constant';
import { createPaginationButtonsIndexes } from '../utils/utils';
import { PaginationButton } from './PaginationButton';

interface PaginationProps {
    setCurrentPage: (number: number) => void,
    currentPage: number,
    totalPages: number
}

export const Pagination = ({setCurrentPage, currentPage, totalPages}: PaginationProps) => {
    const pageNumbers: number[] = useMemo((): number[] => createPaginationButtonsIndexes(currentPage, totalPages)
    , [totalPages, currentPage])

    const setPage = (number: number = 0) => {
        if (currentPage !== number) {
            setCurrentPage(number);
        }
    };

    return (
        <div className="header__item">
            <ul className="pagination">
                <li className="pagination__item">
                    <button className="pagination__btn" type="button" onClick={() => setPage(DEFAULT_PAGE)}>First</button>
                </li>
                {pageNumbers.map((number: number) => 
                    <li key={number} className={`pagination__item ${number === currentPage && 'pagination__item-active'}`}>
                        <PaginationButton number={number} setPage={setPage} />
                    </li>
                )}
                <li className="pagination__item">
                    <button className="pagination__btn" type="button" onClick={() => setPage(totalPages)}>Last</button>
                </li>
            </ul>
        </div>
    )
};