import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Ingredients.css';

class Ingredients extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bottom-bread':
        ingredient = <div className={classes.BreadBottom}></div>
        break;
      case 'top-bread':
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break;
      case 'd_meat':
        ingredient =  <div className={classes.Meat}></div>
        break;
      case 'c_cheese':
        ingredient = <div className={classes.Cheese}></div>
        break;
      case 'b_tomato':
        ingredient =  <div className={classes.Tomato}></div>
        break;
      case 'a_lettuce':
        ingredient =  <div className={classes.Lettuce}></div>
        break;

      default:
        ingredient = null;
    }
    return ingredient;
  }

};

Ingredients.propTypes = {
  type: PropTypes.string.isRequired
};

export default Ingredients
