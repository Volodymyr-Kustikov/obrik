import classes from './miniMenu.module.css';
import {React, useState, useEffect } from 'react';

export const MiniMenu = ({index}) => {
  const [miniButton, setMiniButton] = useState(false);

  function handleChange(bool) {
    setMiniButton(bool);
    return bool;
  }

  return (
    <>
      {miniButton ? 
      <>
        <button onClick={() => {
          handleChange(false)
            
          }}>
          -
        </button>
        {index === 3 && (
          <ul className={classes.downList}>
            <li className={classes.downPunkt}>
              <a href="#block31">
              Спілкування
                
              </a>
            </li>

            <li className={classes.downPunkt}>
              <a href="#block32">Робоче місце</a>
            </li>
            <li className={classes.downPunkt}>
              <a href="#block33">Непередбачуванні обставини</a>
            </li>
          </ul>
        )}
        {index === 4 && (
          <ul className={classes.downList}>
            <li className={classes.downPunkt}>
              <a href="#block41">Відвідувач</a>
            </li>
            <li className={classes.downPunkt}>
              <a href="#block42">Замовлення</a>
            </li>
            <li className={classes.downPunkt}>
              <a href="#block43">Приклад</a>
            </li>

          </ul>
        )}
                {index === 7 && (
          <ul className={classes.downList}>
            <li className={classes.downPunkt}>
              <a href="#block71">Таблиця</a>
            </li>
            <li className={classes.downPunkt}>
              <a href="#block72">Примітки</a>
            </li>


          </ul>
        )}
      </>
       :
      <>
        <button onClick={() => {
          handleChange(true)
          
        }}>
          +
        </button>

      </>
      }
    </>
  )
}