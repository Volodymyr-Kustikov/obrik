import classes from './navBar.module.css'

export const NavBar = () => {

  return (
    <div className={classes.navBar}>
      <form>
        <input type="text" placeholder='Orest-s search Bar' />
      </form>
    </div>
  )
}