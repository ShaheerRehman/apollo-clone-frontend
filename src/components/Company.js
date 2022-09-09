import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Search from "./Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import { DataContext } from "../App";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

export default function Company() {
  const contextData = React.useContext(DataContext);
  const companies =
    contextData && contextData.map((option) => option.companyName.name);
  const [openCompany, setOpenCompany] = React.useState(false);
  const uniqueComps = companies && Array.from(new Set(companies));
  const sortedComps = uniqueComps && uniqueComps.sort();

  return (
    <>
      <ListItemButton onClick={() => setOpenCompany(!openCompany)}>
        <ListItemIcon>
          <ApartmentOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Company" />
        <ListItemIcon sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ArrowDropDownIcon />
        </ListItemIcon>
      </ListItemButton>
      {openCompany ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Search dataToSearch={"company"} data={sortedComps} />
        </Box>
      ) : null}
    </>
  );
}
