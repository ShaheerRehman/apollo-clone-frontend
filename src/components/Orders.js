import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import MuiTableCell from "@mui/material/TableCell";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Divider, styled } from "@mui/material";

const TitleCell = styled(MuiTableCell)({
  fontSize: "0.65rem",
});

export default function Orders({ pData }) {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TitleCell>Name</TitleCell>
            <TitleCell>Title</TitleCell>
            <TitleCell>Company</TitleCell>
            <TitleCell>Contact Location</TitleCell>
            <TitleCell># Employees</TitleCell>
            <TitleCell>Email</TitleCell>
            <TitleCell align="right">Industry</TitleCell>
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
