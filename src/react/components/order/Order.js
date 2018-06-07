import React from 'react';

import classes from './Order.css';
import premiumBurgerIcon from '../../../assets/images/premium.png'

const Order = props => {
  const ingredients = []
  for (let ingredient in props.ingredients ){
    ingredients.push({
      amount: props.ingredients[ingredient],
      name: ingredient
    });
  }

  const fixedPrice = price => {
    let parsedPrice = parseFloat(price);
    return parsedPrice.toFixed(2);
  }

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

  const renderIngredients = ingredients.map( ig => {
    const renamedIngredient = renameIngredient(ig.name);
    return <span className={classes.ingredients} key={ig.name}>{renamedIngredient} : {ig.amount}</span>
  });

  return (
    <div className={classes.order}>
      <div className={classes.orderName}> Name: <strong>{ props.orderData.name }</strong></div>
      <div>Ingredients: { renderIngredients } </div>
      <div className={classes.amount}>
        <strong> USD { fixedPrice(props.price)}</strong>
      </div>
      {
        props.orderData.deliveryMethod === 'premium'
        ? <img className={classes.premium_icon} src={premiumBurgerIcon} alt='premium burger order'/>
        : null
      }
    </div>
  )
}

export default Order;
