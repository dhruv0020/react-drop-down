// src/components/Table1.jsx
import React from 'react';
import { table3Data } from '../data'; // Adjust the path as needed

const Table3 = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>   
          <th>Category</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {table3Data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.category}</td>
            <td>{row.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table3;
