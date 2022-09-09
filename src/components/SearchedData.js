import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../Axios";
import Dashboard from "./Dashboard";

export default function Searched() {
  const [data, setData] = useState();
  const loc = useLocation();

  useEffect(() => {
    axiosInstance
      .get(`search/${loc.state.dataToSearch}/${loc.state.toSearch}/`)
      .then((res) => {
        setData(res.data);
      });
  }, [loc.state]);
  return <Dashboard pData={data} />;
}
