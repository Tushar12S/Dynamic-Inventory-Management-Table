import React, { useState } from 'react';

const InventoryTable = ({ inventory, setInventory, filterCategory }) => {
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = () => {
    const sortedInventory = [...inventory].sort((a, b) =>
      sortAsc ? a.quantity - b.quantity : b.quantity - a.quantity
    );
    setInventory(sortedInventory);
    setSortAsc(!sortAsc);
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const filteredInventory = inventory.filter((item) =>
    filterCategory ? item.category === filterCategory : true
  );

  return (
    <table border="1" style={{ width: '100%', marginTop: '20px' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>
            Quantity
            <button onClick={handleSort}>
              {sortAsc ? 'Sort Desc' : 'Sort Asc'}
            </button>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredInventory.map((item) => (
          <tr
            key={item.id}
            style={{
              backgroundColor: item.quantity < 10 ? '#ffcccc' : 'white',
            }}
          >
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
