import React from "react";
import "./App.scss";
import { Menu } from "./components/Menu/Menu";
import { List } from "./components/List/List";
import { RootState } from "./slices";
import { useSelector } from "react-redux";
import { useApiCall } from "./hooks/useApiCall";

function App() {
  const { loading } = useSelector((state: RootState) => state.list);

	useApiCall();
	
  return (
    <div className="App">
      <Menu />
      <List loading={loading} />
    </div>
  );
}

export default App;
