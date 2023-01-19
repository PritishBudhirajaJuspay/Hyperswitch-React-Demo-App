import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const MenuItems = ({ selected, setSelected }) => {
  const [values, setValues] = useState([
    "Default",
    "Soft",
    "Brutal",
    "Midnight",
    "Charcoal",
    "None",
  ]);

  function handleChange(event) {
    setSelected(event.target.value);
  }

  return (
    <FormControl
      style={{
        marginBottom: "100px",
        width: "100%",
        backgroundColor: "#006DF9",
      }}
    >
      <InputLabel htmlFor="agent-simple">Choose Theme - </InputLabel>
      <Select value={selected} onChange={handleChange}>
        {values.map((value, index) => {
          return (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default MenuItems;
