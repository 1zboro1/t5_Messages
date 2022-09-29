import React, { useState, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function Recipient(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={list.map((rcpnt) => rcpnt.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Recipient name"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
          onKeyDown={(e) => {
            e.target.value = e.target.value();
          }}
          value={props.recipient}
          onChange={props.function}
          onFocus={props.focus}
          onBlur={props.blur}
        />
      )}
    />
  );
}
export default Recipient;
