import { FilterOptions } from "./enums";

export interface ResponseShip {
  title: string;
  description: string;
  icons: {
    large: string;
    medium: string;
  };
  level: string;
  nation: { title: string };
  type: { title: string };
}

export interface ShipInterface {
  title: string;
  description: string;
  icons: {
    large: string;
    medium: string;
  };
  level: string;
  nation: string;
  type: string;
}

export type FilterProperty =
  | FilterOptions.level
  | FilterOptions.nation
  | FilterOptions.type;

export type FilterElementState = FilterProperty | null;
