import React, { useState } from 'react';
import classes from './navBar.module.css'

export const NavBar = ({ searchTerm, handleSearch, highlightText }) => {
  
  return (
    <div className={classes.navBar}>
      <form>
        <input style={{float:'right'}} type="text"
      placeholder="Пошук..."
      value={searchTerm}
      onChange={handleSearch}/>
      </form>
    </div>
  )
}