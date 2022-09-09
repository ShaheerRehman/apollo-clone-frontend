import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Search from "./Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";
import { DataContext } from "../App";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

export default function Job() {
  const contextData = React.useContext(DataContext);
  const jobs = contextData && contextData.map((option) => option.job);
  const [openJob, setOpenJob] = React.useState(false);
  const uniqueJobs = jobs && Array.from(new Set(jobs));
  const sortedJobs = uniqueJobs && uniqueJobs.sort();

  return (
    <>
      <ListItemButton onClick={() => setOpenJob(!openJob)}>
        <ListItemIcon>
          <WorkspacePremiumOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Job Titles" />
        <ListItemIcon sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ArrowDropDownIcon />
        </ListItemIcon>
      </ListItemButton>
      {openJob ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Search dataToSearch={"job"} data={sortedJobs} />
        </Box>
      ) : null}
    </>
  );
}
