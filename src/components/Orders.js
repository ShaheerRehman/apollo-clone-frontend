import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Orders({ pData }) {
  console.log("data");
  console.log(pData);
  console.log("data");
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
          {pData &&
            pData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.job}</TableCell>

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
