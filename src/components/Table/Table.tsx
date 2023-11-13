import React from "react";
import { TableHeader } from "./TableHeader/TableHeader";
import { TableBody } from "./TableBody/TableBody";
import { useSelector } from "react-redux";
import { RootState } from "../../slices";
import { RequestStatus } from "../../models/enums";

export const TankInformationTable = () => {
  const { status, list } = useSelector((state: RootState) => state.list);
  const needRenderTableBody = status === RequestStatus.succes;

  return (
    <div className="table">
      <TableHeader />
      {needRenderTableBody ? (
        <TableBody list={list} />
      ) : (
        <h2 className="table__title">loading...</h2>
      )}
    </div>
  );
};
