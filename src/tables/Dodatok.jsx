import React from 'react';
import './tables.css'
const Dodatok = ({ data }) => (
    <table className='roles_table'>
      <thead className='table_header'>
        <tr  className='table_row'>
          <th>ID</th>
          <th>Col1</th>
          <th>Col2</th>
          <th>Col3</th>
          <th>Col4</th>
          <th>Col5</th>
        </tr>
      </thead>
      <tbody className='table_body'>
        {data.map(item => (
          <tr  className='table_row' key={item.id}>
            <td className='table_item'>{item.id}</td>
            <td className='table_item'>{item.col1}</td>
            <td className='table_item'>{item.col2}</td>
            <td className='table_item'>{item.col3}</td>
            <td className='table_item'>{item.col4}</td>
            <td className='table_item'>{item.col5}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

export default Dodatok