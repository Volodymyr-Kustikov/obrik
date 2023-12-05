import classes from './punkt.module.css'

export const Punkt = (name, index) => {
  return (
    <li className={classes.navigationLink}>
      <div className={classes.img}></div>
      <a href="#block1npm" className={classes.punkt}>{index}. {name} </a>

    </li>
  )
}