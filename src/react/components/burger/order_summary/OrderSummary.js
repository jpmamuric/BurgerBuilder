import React from 'react';

import Aux from '../../../containers/hoc/Aux';
import Button from '../../ui/button/Button';

const OrderSummary = ({ ingredients, continueOrder, cancelOrder, price }) => {
  function renameIngredient(ingredient) {
    switch (ingredient) {
      case 'b_tomato':
        return 'tomato'
      case 'a_lettuce':
        return 'lettuce'
      case 'c_cheese':
        return 'cheese'
      case 'd_meat':
        return 'meat'
      default:
        return ingredient
    }
  }

  const ingredientSummary = Object.keys(ingredients)
    .map( ingredient => {
      const namedIngredient = renameIngredient(ingredient);
      return (
        <li key={ ingredient } style={{ listStyle: 'none' }}>
          <span>{namedIngredient}</span>: {ingredients[ingredient]}
        </li>
      )
    })

  return (
    <Aux>
      <h3> Your Order </h3>
      <ul style={{ padding: 0 }}>
        { ingredientSummary }
      </ul>
      <p> <strong>Total: ${price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={cancelOrder}>CANCEL</Button>
      <Button btnType='Success'clicked={continueOrder}>CONTINUE</Button>
    </Aux>
  )
}

export default OrderSummary
