import React, { useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { TankInformationTable } from './components/TableTanksInfo';
import { DEFAULT_FIELDS } from './constant/constant';
import { TankInterface, MetaDataInterface, ResponseRequest } from './types';
import { getFilteredList, getPaginatedTanksInfo } from './utils/utils';

function App() {
  const [currentTanksList, setCurrentTanksList] = useState<TankInterface[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filtering, setFiltering] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [filtereIDs, setFilteredIDs] = useState<string>();
  const [meta, setMeta] = useState<MetaDataInterface | null>(null);
  const [filterReset, setFilterReset] = useState<boolean>(false);
  const [isNoResult, setIsNoResult] = useState<boolean>(false);

  useEffect(() => {
    const getTanksList = async () => {
      setLoading(true);
      const response: ResponseRequest = await getPaginatedTanksInfo(itemsPerPage, currentPage, filtering, filtereIDs, DEFAULT_FIELDS, changeResultStatus);
      const tanks = Object.values(response.data).filter(item => item);

      setCurrentTanksList(tanks);
      setMeta(response.meta);
      setLoading(false);
    }
    
    getTanksList();
  }, [itemsPerPage, currentPage, filterReset])

  const changeResultStatus = (status: boolean) => {
    setIsNoResult(status);
  };

  const changeFilteredIDs = (newIDs: string) => {
    setFilteredIDs(newIDs);
  };

  const handleFilter = (searchValue: string) => {
    if (searchValue) {
        setLoading(true);
        setFiltering(true)
        getFilteredList(itemsPerPage, searchValue, currentPage, true, changeFilteredIDs, changeResultStatus)
          .then(response => {
            setCurrentTanksList(response.data);
            setMeta(response.meta);
          })
          .finally(() =>{
            setLoading(false);
          })
    }
  };
  
  const resetFilter = () => {
    if (!filterReset) {
      setCurrentPage(1);
      setFiltering(false);
      setFilterReset(!filterReset);
    }
  };
  
  const setPageItemLimit = (value: number) => {
    if (value || value !== itemsPerPage) {
      setItemsPerPage(value);
    }
  };

  return (
    <div className="App">
      <Header
        filtering={filtering}
        handleFilter={handleFilter}
        resetFilter={resetFilter}
        meta={meta}
        setCurrentPage={setCurrentPage}
        setPageItemLimit={setPageItemLimit}
        currentPage={currentPage}
        isNoResult={isNoResult}
      />
      <TankInformationTable tanks={currentTanksList} loading={loading} />
    </div>
  );
}

export default App;
