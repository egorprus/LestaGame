import React from "react";
import { TableHeaders } from "../../../models/enums";

export const TableHeader = () => {
  return (
    <div className="table__header">
      <div className="table__row">
        <div className="table__cell">{TableHeaders.name}</div>
        <div className="table__cell">{TableHeaders.nation}</div>
        <div className="table__cell">{TableHeaders.image}</div>
        <div className="table__cell">{TableHeaders.type}</div>
        <div className="table__cell">{TableHeaders.tier}</div>
        <div className="table__cell">{TableHeaders.tankId}</div>
      </div>
    </div>
  );
};
