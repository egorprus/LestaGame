import React from "react";
import { TableRow } from "../TableRow/TableRow";
import { TankInterface } from "../../../models/types";

interface Prop {
  list: TankInterface[];
}
export const TableBody = ({ list }: Prop) => {
  return (
    <div className="table__body">
      {list.map((item, index) => (
        <TableRow index={index} rowItem={item} key={index} />
      ))}
    </div>
  );
};
