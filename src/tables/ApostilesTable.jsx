import React from 'react';
import './tables.css'
const Apostiles = ({ data }) => (
    <table  className='roles_table'>
      <thead className='table_header'>
        <tr  className='table_row'>
          <th>Документи</th>
          <th>Вимоги</th>
          <th>Термін проставлення</th>
          <th>Вартість</th>
        </tr>
      </thead >
      <tbody className='table_body'>
        {data.map(item => (
          <tr className='table_row' key={item.id}>
            <td style={{width:'30%'}} className='table_item'>{item.doc}</td>
            <td style={{width:'45%'}} className='table_item'>
              <ul className='table_list'>
                {item.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </td>
            <td  className='table_item'>
              <ul style={{listStyle:'none'}} className='table_list'>
                {item.terms.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
            </td>
            <td  className='table_item'>
              <ul style={{listStyle:'none'}} className='table_list'>
                {item.price.map((price, index) => (
                  <li key={index}>{price}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
export default Apostiles