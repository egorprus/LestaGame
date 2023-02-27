import React from 'react';
import { TankInterface } from '../types';

interface TableRowInterface {
    tableItem: TankInterface,
    index: number
}

export const TableRow = ({tableItem, index}: TableRowInterface) => {
    return (
        <div className="table__row" key={index}>
            <div className="table__cell">{tableItem.name}</div>
            <div className="table__cell">{tableItem.nation}</div>
            <div className="table__cell"><img src={tableItem.images?.small_icon} alt="tank icon"/></div>
            <div className="table__cell">{tableItem.type}</div>
            <div className="table__cell">{tableItem.tier}</div>
            <div className="table__cell">{tableItem.tank_id}</div>
        </div>
    );
};