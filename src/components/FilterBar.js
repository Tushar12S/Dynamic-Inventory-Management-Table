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
          <MenuItem value="Groceries">Groceries</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
          <MenuItem value="Books">Books</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBar;
