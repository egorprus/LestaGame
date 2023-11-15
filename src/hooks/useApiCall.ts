import { useQuery } from "@apollo/client";
import { GET_ALL_SHIPS } from "../query/ship";
import { useEffect } from "react";
import { useAppDispatch } from "../slices";
import { setDefaultList } from "../slices/listSlice";
import { ResponseShip } from "../models/types";

export const useApiCall = () => {
  const dispatch = useAppDispatch();
  const { data, loading } = useQuery(GET_ALL_SHIPS);

  useEffect(() => {
    if (!loading) {
			setTimeout(() => {
      const shipList = data.vehicles.map((ship: ResponseShip) => {
        return {
          ...ship,
          nation: ship.nation.title,
          type: ship.type.title,
        };
      });
      dispatch(setDefaultList(shipList));
		}, 3000);
    }
  }, [data, loading, dispatch]);
};
