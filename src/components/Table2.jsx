// src/components/Table1.jsx
import React from 'react';
import { table2Data } from '../data'; // Adjust the path as needed

const Table2 = () => {
  return (
    <table className="table">   
      <thead>
        <tr>
          <th>ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Ratings</th>
        </tr>
      </thead>
      <tbody>
        {table2Data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.product}</td>
            <td>{row.price}</td>
            <td>{row.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table2;
