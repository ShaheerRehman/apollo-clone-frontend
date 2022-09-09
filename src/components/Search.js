import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function FreeSolo() {
  const navigate = useNavigate();
  const goSearch = () => {
    navigate("/search/?search=" + toSearch);
    window.location.reload();
  };
  const contextData = React.useContext(DataContext);
  const [toSearch, setToSearch] = React.useState();
  return (
    <Stack sx={{ width: 270 }}>
      <Autocomplete
        // sx={{ height: 30 }}
        freeSolo
        disableClearable
        options={contextData && contextData.map((option) => option.location)}
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
              label="Search Location"
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
