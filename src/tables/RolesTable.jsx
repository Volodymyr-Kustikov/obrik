import React from 'react';
import './tables.css'
const RolesTable = ({ data }) => {
    return (
      <div id='section2'>
        <h1>Таблиця ролей</h1>
        <table className='roles_table'>
          <thead className='table_header'>
            <tr  className='table_row'>
              <th>ID</th>
              <th>Роль</th>
              <th>Функції</th>
              <th>Зони відповідальності</th>
              <th>Підпорядкування</th>
            </tr>
          </thead>
          <tbody className='table_body'>
            {data.map((item, index) => (
              <tr className='table_row' key={item.id}>
                <td className='table_item'>{index + 1}</td>
                <td className='table_item'>{item.role}</td>
                <td className='table_item'><ul className='table_list'>
              {item.functions.map((func, index) => (
                <li key={index}>{func}</li>
              ))}
            </ul></td>
                
                <td className='table_item'>
              <ul className='table_list'>
              {item.zones_of_responsibility.map((zone, index) => (
                <li key={index}>{zone}</li>
              ))}
            </ul>
            
            </td>
                <td className='table_item'>{item.subordination}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default RolesTable