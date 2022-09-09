import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

export default function FreeSolo({ dataToSearch, data }) {
  const [label, setLabel] = React.useState("");
  React.useEffect(() => {
    if (dataToSearch === "location") {
      setLabel("Enter locations...");
    } else if (dataToSearch === "job") {
      setLabel("Search for a job title");
    } else if (dataToSearch === "company") {
      setLabel("Enter companies...");
    }
  }, [dataToSearch]);
  // if (dataToSearch === "location") {
  //   console.log("yes");
  //   var label = "Search Location";
  // }
  const navigate = useNavigate();
  const goSearch = () => {
    navigate("/search/?search=" + toSearch, {
      state: { dataToSearch, toSearch },
    });
    window.location.reload();
  };
  const [toSearch, setToSearch] = React.useState();
  return (
    <Stack sx={{ width: 270 }}>
      <Autocomplete
        // sx={{ height: 30 }}
        freeSolo
        disableClearable
        options={data && data.map((option) => option)}
        renderInput={(params) => (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              goSearch();
            }}
          >
            <TextField
              {...params}
              // sx={{ height: 4 }}
              size="small"
              label={label}
              onChange={(e) => setToSearch(e.target.value)}
              onSelect={(e) => setToSearch(e.target.value)}
              // InputLabelProps={{ style: { fontSize: 15 } }}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          </form>
        )}
      />
    </Stack>
  );
}
