import React from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

const FilterBar = ({ setFilterCategory }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <FormControl fullWidth>
        <InputLabel>Filter by Category</InputLabel>
        <Select onChange={(e) => setFilterCategory(e.target.value)}>
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Furniture">Furniture</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBar;
