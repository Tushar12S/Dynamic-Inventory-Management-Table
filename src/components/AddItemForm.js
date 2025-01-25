import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const AddItemForm = ({ inventory, setInventory }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && category && quantity) {
      setInventory([
        ...inventory,
        { id: Date.now(), name, category, quantity: parseInt(quantity, 10) },
      ]);
      setName("");
      setCategory("");
      setQuantity("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 2, marginTop: 4 }}
    >
      <TextField
        label="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <TextField
        label="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <Button variant="contained" type="submit">
        Add Item
      </Button>
    </Box>
  );
};

export default AddItemForm;
