import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { DataContext } from "../App";

export default function FreeSolo() {
  const data = React.useContext(DataContext);
  const [toSearch, setToSearch] = React.useState();
  return (
    <Stack sx={{ width: 300 }}>
      {/* {console.log(toSearch)} */}
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data && data.map((option) => option.location)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            onChange={(e) => {
              setToSearch(e.target.value);
            }}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
}
