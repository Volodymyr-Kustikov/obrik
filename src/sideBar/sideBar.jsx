import classes from './sideBar.module.css'

export const SideBar = () => {
  
  return (
    <div className={classes.sideBar}>
      <ul className={classes.list}>
        <li>
          <div className={classes.img}></div>
          <a href="#block1" className={classes.punkt}>Пункт 1</a>

        </li>
        <li>
        <a href="#block2" className={classes.punkt}>Пункт 2</a>
          
          </li>
          <li>
          
          <a href="#block3" className={classes.punkt}>Пункт 3</a>
          </li>
          <li>
          <a href="#block4" className={classes.punkt}>Пункт 4</a>
          
          </li>
          <li>
          
            <a href="#block5" className={classes.punkt}>Пункт 5</a>
          </li>
          <li>
            <a href="#block6" className={classes.punkt}>Пункт 6</a>
          
          </li>
          <li>
          
            <a href="#block7" className={classes.punkt}>Пункт 7</a>
          </li>
          <li>
          
            <a href="#block8" className={classes.punkt}>Пункт 8</a>
          </li>
          <li>
            <a href="#block9" className={classes.punkt}>Пункт 9</a>
          
          </li>
          <li>

            <a href="#block10" className={classes.punkt}>Пункт 10</a>
          </li>

      </ul>
    </div>
  )
}