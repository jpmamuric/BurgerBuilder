import React from 'react';

import Links from '../links/Links';
import DrawerToggle from '../sidedrawer/drawer_toggle/DrawerToggle';
import Logo from '../logo/Logo';
import classes from './Toolbar.css';

const Toolbar = ({ toggle }) => {
  const { toolbar, logo, desktop_only} = classes;
  return (
    <header className={toolbar}>
      <DrawerToggle toggle={toggle} />
        <div className={logo}>
            <Logo />
        </div>
      <nav className={desktop_only}>
        <Links />
      </nav>
    </header>
  )
}

export default Toolbar;
