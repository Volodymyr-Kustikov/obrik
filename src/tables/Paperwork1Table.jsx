import React from 'react';
import './tables.css'
const Paperwork1Table = ({ data }) => (
    <table className='roles_table'>
      <thead className='table_header'>
        <tr  className='table_row'>
          <th>ID</th>
          <th>Тип</th>
          <th>Правила написання в тексті перекладу</th>
          <th>Українська</th>
          <th>Англійська</th>
          <th>Німецька</th>
        </tr>
      </thead>
      <tbody className='table_body'>
        {data.map(item => (
          <tr  className='table_row' key={item.id}>
            <td className='table_item'>{item.id}</td>
            <td className='table_item'>{item.type}</td>
            <td className='table_item'>{item.rules}</td>
            <td className='table_item'>{item.ukr}</td>
            <td className='table_item'>{item.eng}</td>
            <td className='table_item'>{item.de}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

export default Paperwork1Table