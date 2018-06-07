import React from 'react';

import classes from './Button.css';

const Button = ({ children, clicked, btnType, disabled }) => {
  const { Button } = classes;
  return (
    <button
     onClick={clicked}
     className={`${Button} ${classes[btnType]}`}
     disabled={disabled}>
      { children }
    </button>
  )
}

export default Button;
