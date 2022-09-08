import { useContext } from "react";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DataContext } from "../App";

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const data = useContext(DataContext);
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Company</TableCell>
            <TableCell>Contact Location</TableCell>
            <TableCell># Employees</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Industry</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.job}</TableCell>
                {/* company */}

                <TableCell>{item.companyName.name}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.employees}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell align="right">{item.industry}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
