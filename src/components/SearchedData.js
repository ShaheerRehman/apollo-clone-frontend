import React, { useEffect, useState } from "react";
import axiosInstance from "../Axios";
import Dashboard from "./Dashboard";

export default function Searched() {
  const [data, setData] = useState();

  useEffect(() => {
    axiosInstance
      .get(`search/location/${window.location.search.substring(8)}/`)
      .then((res) => {
        setData(res.data);
        console.log("res.data");
        console.log(res.data);
      });
  }, [setData]);
  return <Dashboard pData={data} />;
}
