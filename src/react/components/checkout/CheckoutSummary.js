import React from 'react';

import classes from './CheckoutSummary.css';
import Burger from '../burger/Burger';
import Button from '../ui/button/Button';

const CheckoutSummary = ({ checkoutCancelled, checkoutContinued, ingredients }) => {
  const { checkout_summary, burger } = classes;
  return (
    <div className={ checkout_summary }>
      <h1> Is your order correct?</h1>
      <div className={ burger }>
        <Burger ingredients={ ingredients }/>
      </div>
      <Button btnType='Danger' clicked={checkoutCancelled}>No</Button>
      <Button btnType='Success' clicked={checkoutContinued}>Yes</Button>
    </div>
  )
}

export default CheckoutSummary;
