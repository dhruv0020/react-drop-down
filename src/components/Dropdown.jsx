// src/components/Dropdown.jsx
import React, { useState } from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';

const Dropdown = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleSelect = (option) => {
    setSelectedTable(option);
  };

  return (
    <div>
      <select onChange={(e) => handleSelect(e.target.value)}>
        <option value="table1">Table 1</option>
        <option value="table2">Table 2</option>
        <option value="table3">Table 3</option>
      </select>

      {selectedTable === 'table1' && <Table1 />}
      {selectedTable === 'table2' && <Table2 />}
      {selectedTable === 'table3' && <Table3 />}
    </div>
  );
};

export default Dropdown;
