import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import AddItemForm from "./components/AddItemForm";
import FilterBar from "./components/FilterBar";
import { Box, Typography } from "@mui/material";

const App = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Item A", category: "Electronics", quantity: 15 },
    { id: 2, name: "Item B", category: "Furniture", quantity: 8 },
  ]);

  const [filterCategory, setFilterCategory] = useState("");

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dynamic Inventory Management
      </Typography>
      <FilterBar setFilterCategory={setFilterCategory} />
      <AddItemForm inventory={inventory} setInventory={setInventory} />
      <InventoryTable
        inventory={inventory}
        setInventory={setInventory}
        filterCategory={filterCategory}
      />
    </Box>
  );
};

export default App;
