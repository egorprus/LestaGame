import React from 'react';

interface PaginationButtonProps {
    number: number,
    setPage: (number: number) => void
}

export const PaginationButton = ({number, setPage}: PaginationButtonProps) => {
    return (
        <button className="pagination__btn" type="button" onClick={() => setPage(number)}>
            {number}
        </button>
    )
};