import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Search from "./Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";
import { DataContext } from "../App";

export default function Location() {
  const [openLocation, setOpenLocation] = React.useState(false);
  const contextData = React.useContext(DataContext);
  const locations = contextData && contextData.map((option) => option.location);
  const uniqueLocs = locations && Array.from(new Set(locations));
  const sortedLocs = uniqueLocs && uniqueLocs.sort();

  return (
    <>
      <ListItemButton onClick={() => setOpenLocation(!openLocation)}>
        <ListItemIcon>
          <LocationOnOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Location" />
        <ListItemIcon sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ArrowDropDownIcon />
        </ListItemIcon>
      </ListItemButton>
      {openLocation ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Search dataToSearch={"location"} data={sortedLocs} />
        </Box>
      ) : null}
    </>
  );
}
