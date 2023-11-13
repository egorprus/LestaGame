import React, { useEffect } from "react";
import "./App.scss";
import { Menu } from "./components/Menu/Menu";
import { TankInformationTable } from "./components/Table/Table";
import { useApi } from "./hooks/Api/useApi";
import { useQuery } from "@apollo/client";
import { GET_ALL_ID } from "./query/ship";

function App() {
	// const {getList} = useApi();
	const {data, loading, error} = useQuery(GET_ALL_ID);

	useEffect(() => {
		if(!loading) {
			console.log(data.vehicles, 'data=====')
		}
	}, [data, loading])
	// useEffect(() => {
	// 	getList();
  // }, [getList]);

  return (
    <div className="App">
      <Menu />
      <TankInformationTable />
    </div>
  );
}

export default App;
