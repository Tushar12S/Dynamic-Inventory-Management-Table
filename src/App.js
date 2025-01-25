import React, { useState } from "react";
import InventoryTable from "./components/InventoryTable";
import AddItemForm from "./components/AddItemForm";
import FilterBar from "./components/FilterBar";
import { Box, Typography } from "@mui/material";

const App = () => {
  const [inventory, setInventory] = useState([
    { id: 1, name: "Laptop", category: "Electronics", quantity: 15 },
    { id: 2, name: "Sofa", category: "Furniture", quantity: 8 },
    { id: 3, name: "Apples", category: "Groceries", quantity: 50 },
    { id: 4, name: "T-Shirt", category: "Clothing", quantity: 25 },
    { id: 5, name: "Fiction Book", category: "Books", quantity: 12 },
    { id: 6, name: "Headphones", category: "Electronics", quantity: 20 },
    { id: 7, name: "Dining Table", category: "Furniture", quantity: 5 },
    { id: 8, name: "Bananas", category: "Groceries", quantity: 30 },
    { id: 9, name: "Jeans", category: "Clothing", quantity: 10 },
    { id: 10, name: "Notebook", category: "Books", quantity: 7 },
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
