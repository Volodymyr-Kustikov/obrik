import React from 'react';
import './tables.css'
const Paperwork2Table = ({ data }) => (
    <table className='roles_table'>
      <thead className='table_header'>
        <tr className='table_row'>
          <th>ID</th>
          <th>Тип</th>
          <th>Правила написання в тексті перекладу</th>
          
          <th>Зразок написання в вихідному документі</th>
          <th>Зразок написання в тексті перекладу</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody className='table_body'>
        {data.map(item => (
          <tr className='table_row' key={item.id}>
            <td className='table_item'>{item.id}</td>
            <td className='table_item'>{item.type}</td>
            <td className='table_item'>{item.rules}</td>
            <td style={{width:'18%'}} className='table_item'><ul className='table_list'>
                {item.source.map((source, index) => (
                  <li key={index}>{source}</li>
                ))}
              </ul></td>
            <td style={{width:'26%'}} className='table_item'><ul className='table_list'>
                {item.translated.map((translated, index) => (
                  <li key={index}>{translated}</li>
                ))}
              </ul></td>
            <td className='table_item'>{item.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  export default Paperwork2Table