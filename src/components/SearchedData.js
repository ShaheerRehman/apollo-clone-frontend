import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../Axios";
import Dashboard from "./Dashboard";

export default function Searched() {
  const [data, setData] = useState();
  const loc = useLocation();
  // console.log(loc);
  let pData = data && data.map((item) => item);
  console.log("pDatas");
  console.log(pData);
  console.log("pDatae");

  useEffect(() => {
    axiosInstance
      .get(`search/${loc.state.dataToSearch}/${loc.state.toSearch}/`)
      .then((res) => {
        setData(res.data);
        console.log("res.data");
        console.log(res.data);
      });
  }, [loc.state]);
  return <Dashboard pData={data} />;
}
