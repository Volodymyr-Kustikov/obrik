import {React, useState, useEffect } from 'react';
import classes from './title.module.css';
import { MiniMenu } from './miniMenu/miniMenu';

export const Title = ({title, index, href}) => {


  return (
    <>
      <li className={classes.block}>
        <div className={classes.wrapper}>
          
        </div>
        <div className={classes.img}></div>
        <a href={href} className={classes.punkt}>{title}</a>
        <div className={classes.list}>
          {index === 3 && (
            <MiniMenu index={3}/>
          )}
        </div>
        <div className={classes.list}>
        {index === 4 && (
          <MiniMenu index={4}/>
        )}
            </div>
            <div className={classes.list}>
        {index === 7 && (
          <MiniMenu index={7}/>
          )}
          </div>
      </li>
    </>
  )
}