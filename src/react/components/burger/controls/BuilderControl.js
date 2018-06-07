import React from 'react';

import classes from './Controls.css';

const BuilderControl = ({ label, add, remove, disabled }) => {
  const { BuildControl, Less, More, Label } = classes;
  return (
    <div className={BuildControl}>
      <div className={Label}>{label}</div>
      <button
        className={Less}
        onClick={remove}
        disabled={disabled}>
          Less
        </button>
      <button
        className={More}
        onClick={add}>
          More
        </button>
    </div>
  )
}

export default BuilderControl;
