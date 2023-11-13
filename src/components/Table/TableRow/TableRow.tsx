import React from "react";
import { TankInterface } from "../../../models/types";

interface Prop {
  rowItem: TankInterface;
  index: number;
}

export const TableRow = ({ rowItem, index }: Prop) => {
  return (
    <div className="table__row" key={index}>
      <div className="table__cell">{rowItem.name}</div>
      <div className="table__cell">{rowItem.nation}</div>
      <div className="table__cell">
        <img src={rowItem.images?.small_icon} alt="tank icon" />
      </div>
      <div className="table__cell">{rowItem.type}</div>
      <div className="table__cell">{rowItem.tier}</div>
      <div className="table__cell">{rowItem.tank_id}</div>
    </div>
  );
};
