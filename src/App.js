import React, { useEffect, useState } from "react";
import axiosInstance from "./Axios";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searched from "./components/SearchedData";

export const DataContext = React.createContext();

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    axiosInstance.get("persons_get/").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [setData]);
  return (
    <BrowserRouter>
      <DataContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Dashboard pData={data} />} />
          <Route path="/search" element={<Searched />} />
        </Routes>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
