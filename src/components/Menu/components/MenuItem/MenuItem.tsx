import React, { ChangeEvent } from "react";
import { FilterOptions } from "../../../../models/enums";
import { MenuButton } from "../MenuButton/MenuButton";
import { MenuInput } from "../MenuInput/MenuInput";

interface Props {
  option: FilterOptions;
  value?: string;
  isActive?: boolean;
  handleClick: (filter: FilterOptions) => void;
  handleChange?: (
    event: ChangeEvent<HTMLInputElement>,
    key: FilterOptions
  ) => void;
}
export const MenuItem = ({
  option,
  value,
  handleClick,
  handleChange,
  isActive,
}: Props) => {
  return (
    <li className={`filter-list__item ${isActive && "active"}`}>
      {option !== FilterOptions.default && (
        <MenuInput
          value={value || ""}
          placeholder={option}
          handleChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange && handleChange(event, option)
          }
        />
      )}
      <MenuButton text={option} handleClick={() => handleClick(option)} />
    </li>
  );
};
