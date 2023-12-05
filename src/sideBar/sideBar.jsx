import React, { useState } from 'react';
import classes from './sideBar.module.css';
import { Punkt } from './punkt/punkt';
import titles from './titles.json'

export const SideBar = () => {
  const [smallButton, setSmallButton] = useState(true);
  const [buttonControl, setButtonControl] = useState('+')
  
  return (
    <div className={classes.sideBar}>
      <ul className={classes.list}>
        {titles.map((name, index) => {
          return (
            <Punkt name={name} index={index} / >
          )
        })}
        {/* <li className={classes.navigationLink}>
          <div className={classes.img}></div>
          <a href="#block1" className={classes.punkt}>Пункт 1  </a>

        </li>
        <li className={classes.navigationLink}>
          <div className={classes.img}></div>
          <a href="#block2" className={classes.punkt}>Пункт 2 </a>
          {smallButton ? (
            <button
              onClick={() => {setSmallButton(false)}}
            >
              +
            </button>
          ) : 
          <div className={classes.smallList}>
          
            <button onClick={() => {setSmallButton(true)}}>-</button>
            <ul className={classes.underList}>
              <li><a className={classes.smallLink}>Підрозділ 1</a></li>
              <li><a className={classes.smallLink}>Підрозділ 2</a></li>
              <li><a className={classes.smallLink}>Підрозділ 3</a></li>
            </ul>
          </div>

        }
        </li>
        <li className={classes.navigationLink}>
          <div className={classes.img}></div>

          <a href="#block3" className={classes.punkt}>Пункт 3</a>
        </li>
        <li className={classes.navigationLink}>
          <div className={classes.img}></div>

          <a href="#block4" className={classes.punkt}>Пункт 4</a>
          
        </li>
        <li className={classes.navigationLink}>
          <div className={classes.img}></div>

          <a href="#block5" className={classes.punkt}>Пункт 5</a>
        </li>
        <li className={classes.navigationLink}>
          <div className={classes.img}></div>

          <a href="#block6" className={classes.punkt}>Пункт 6</a>
        
        </li>
        <li className={classes.navigationLink}>
        <div className={classes.img}></div>

          <a href="#block7" className={classes.punkt}>Пункт 7</a>
        </li>
        <li className={classes.navigationLink}>
        <div className={classes.img}></div>

          <a href="#block8" className={classes.punkt}>Пункт 8</a>
        </li>
        <li className={classes.navigationLink}>
        <div className={classes.img}></div>

          <a href="#block9" className={classes.punkt}>Пункт 9</a>
        
        </li>
        <li className={classes.navigationLink}>
        <div className={classes.img}></div>

          <a href="#block10" className={classes.punkt}>Пункт 10</a>
        </li> */}

      </ul>
    </div>
  )
}