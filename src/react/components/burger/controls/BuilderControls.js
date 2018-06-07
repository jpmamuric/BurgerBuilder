import React from 'react';

import classes from './Controls.css';
import BuilderControl from './BuilderControl';

const controls = [
  { label: 'Tomato', type: 'b_tomato' },
  { label: 'Lettuce', type: 'a_lettuce' },
  { label: 'Cheese', type: 'c_cheese' },
  { label: 'Meat', type: 'd_meat' },

]

const BuilderControls = ({ addIngredients, removeIngredients, disabled, totalPrice, canOrder, handleOrderNow }) => {
  const { buildControls, OrderButton } = classes;
  return (
    <div className={buildControls}>
      {
        controls.map(control => {
          const { label, type } = control;
          return <BuilderControl
            key={label}
            label={label}
            add={()=>addIngredients(type)}
            remove={()=>removeIngredients(type)}
            disabled={disabled[type]}
          />
        })
      }
      <p>Total: $<strong>{totalPrice.toFixed(2)}</strong></p>
      <button
        className={OrderButton}
        disabled={!canOrder}
        onClick={handleOrderNow}>
          Order
        </button>
    </div>
  )
}

export default BuilderControls;
