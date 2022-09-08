import React, { useEffect, useState } from "react";
import axiosInstance from "./Axios";
import Dashboard from "./components/Dashboard";

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
    <DataContext.Provider value={data}>
      <Dashboard />;
    </DataContext.Provider>
  );
}

export default App;
