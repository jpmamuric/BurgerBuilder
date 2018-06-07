import React from 'react';
import { NavLink } from 'react-router-dom'

import logoImg from '../../../../assets/images/burger-logo.png'
import classes from './Logo.css';

const logo = () => {
  const { Logo } = classes;
  return (
    <div className={Logo} >
      <NavLink exact to='/' >
        <img src={logoImg} alt='burger builder' />
      </NavLink>
    </div>
  )
}

export default logo;
