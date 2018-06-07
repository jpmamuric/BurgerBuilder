import React from 'react';
import { NavLink } from 'react-router-dom'

import classes from './Links.css';

const Links = () => {
  const { links, link } = classes;
  return (
    <ul className={links}>
      <NavLink exact activeClassName={classes.active} to='/' className={link}>Home</NavLink>
      <NavLink exact activeClassName={classes.active} to='/orders' className={link}>Orders</NavLink>
    </ul>
  )
}

export default Links;
