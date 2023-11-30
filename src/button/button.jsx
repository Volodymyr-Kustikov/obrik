import classes from './button.module.css'
import React, { useState } from 'react';
import { SideBar } from '../sideBar/sideBar';

export const Button = () => {
  const [value, setValue] = useState(false);

  return (
    <>
      {value ? (
        <div className={classes.menu}>
          <button
            className={classes.button}
            onClick={() => setValue(false)}
          >
            Зміст-
          </button>
            <SideBar />
        </div>
      ) :
      <button
        onClick={() => setValue(true)}
        className={classes.button}
      >
        Зміст +
      </button>}
    </>
  )
}