import classes from './logo.module.css'

export const Logo = () => {
  return (
    <div className={classes.logo}>
      <div className={classes.image}></div>
      <div className={classes.name}>ObriSoft</div>
    </div>
  )
}