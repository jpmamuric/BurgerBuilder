import React from 'react';

import classes from './DrawerToggle.css';

const DrawerToggle = ({ toggle }) => {
  const  { DrawerToggle } = classes;
  return (
    <div className={DrawerToggle} onClick={toggle}>
      <div />
      <div />
      <div />
    </div>
  )
}

export default DrawerToggle;
