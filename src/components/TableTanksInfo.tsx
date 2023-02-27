import React from 'react';
import { TankInterface } from '../types';
import { TableRow } from './TableRow';


interface TankInformationTableProps {
    tanks: TankInterface[] | null,
    loading: boolean
}

export const TankInformationTable = ({tanks, loading}: TankInformationTableProps) => {
    return (
        <div className="table">
            <div className="table__header">
                <div className="table__row">
                    <div className="table__cell">Name</div>
                    <div className="table__cell">Nation</div>
                    <div className="table__cell">Image</div>
                    <div className="table__cell">Type</div>
                    <div className="table__cell">Tier</div>
                    <div className="table__cell">Tank id</div>
                </div>
            </div>
            {loading ?
                <h2 className="table__title">loading...</h2> :
                <div className="table__body">
                    {tanks ? tanks.map((item, index) => {
                            return <TableRow index={index} tableItem={item} key={index} />
                    })
                        : <h2 className="table__title">No results</h2>
                    }
                </div>
            }
        </div>
    );
};