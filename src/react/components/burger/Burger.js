import React from 'react';

//with Router is a HOC which allows access to 'match' prop fror react-router
import { withRouter } from 'react-router-dom'

import classes from './Burger.css';
import Ingredients from './ingredients/Ingredients'

const Burger = props => {
  const { ingredients } = props;
  let ingredientsAll = Object.keys(ingredients)
    .map(ingredient => {
      return [...Array(ingredients[ingredient])].map((_, i) => {
        return <Ingredients key={ ingredient + i } type={ingredient} />
      });
    })
    .reduce((current, previous) => {
      return current.concat(previous)
    }, [])

  if(ingredientsAll.length === 0) {
    ingredientsAll = <p>Let's start building your burger!</p>
  }

  return (
    <div className={classes.burger}>
        <Ingredients type='top-bread' />
        { ingredientsAll }
        <Ingredients type='bottom-bread' />

    </div>
  );
}

export default withRouter(Burger);
