import React from "react";
import { FilterElementState, ShipInterface } from "../../../models/types";
import { FilterOptions } from "../../../models/enums";

interface Prop {
  rowItem: ShipInterface;
  index: number;
	filterValue: FilterElementState,
}

export const ListItem = ({ rowItem, index, filterValue }: Prop) => {
  const { nation, title, type, icons, level, description } = rowItem;
  return (
    <li className="list__item" key={index}>
      <h2 className="list__item-header">{title}</h2>
      <div className="list__item-content">
        <div className="list__item-img">
          <img src={icons.medium} alt="ship icon" />
        </div>
        {description}
      </div>
      <div className="list__item-footer">
        <span className={`${filterValue === FilterOptions.level && 'active'}`}>Level: {level}</span>
        <span className={`${filterValue === FilterOptions.nation && 'active'}`}>Nation: {nation}</span>
        <span className={`${filterValue === FilterOptions.type && 'active'}`}>Type: {type}</span>
      </div>
    </li>
  );
};
