import React from 'react';


import Links from '../links/Links';
import Logo  from '../logo/Logo';
import Backdrop from '../../ui/backdrop/Backdrop';
import Aux from '../../../containers/hoc/Aux'
import classes from './Sidedrawer.css';

const Sidedrawer = ({ open, close }) => {
  const { sidedrawer, close_sidedrawer, open_sidedrawer, logo } = classes;
  let attachedClasses = [ sidedrawer, close_sidedrawer ]
  if(open) {
    attachedClasses = [ sidedrawer, open_sidedrawer ]
  }

  return (
    <Aux>
      <Backdrop show={open} hide={close}/>
      <div className={attachedClasses.join(' ')} onClick={close}>
        <div className={logo}>
            <Logo />
        </div>

        <nav>
          <Links />
        </nav>
      </div>
    </Aux>
  )
}

export default Sidedrawer;
