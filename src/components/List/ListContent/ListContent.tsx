import React from "react";
import { ListItem } from "../ListItem/ListItem";
import { FilterElementState, ShipInterface } from "../../../models/types";

interface Prop {
  list: ShipInterface[];
  filterValue: FilterElementState;
}
export const ListContent = ({ list, filterValue }: Prop) => {
  return (
    <ul className="list">
      {list.length ? (
        list.map((item, index) => (
          <ListItem
            index={index}
            rowItem={item}
            key={index}
            filterValue={filterValue}
          />
        ))
      ) : (
        <div className="empty-page">
          <h1>Empty list</h1>
        </div>
      )}
    </ul>
  );
};
