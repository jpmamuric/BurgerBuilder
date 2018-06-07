import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import CheckoutSummary from '../../components/checkout/CheckoutSummary';
import Contact from './Contact';

class Checkout extends Component {
  handleCheckoutCancelled = () => {
    this.props.history.goBack();
  }

  handleCheckoutContinued = () => {
    this.props.history.replace('/checkout/contact')
  }

  render() {
    let summary = <Redirect to='/' />
    const { list, purchased } = this.props;
    const purchasedRedirect = purchased ? <Redirect to='/' /> : null
    if(list) {
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            checkoutCancelled={this.handleCheckoutCancelled}
            checkoutContinued={this.handleCheckoutContinued}
            ingredients={list}/>
          <Route
            path={`${this.props.match.path}/contact`}
            component={Contact}
          />
        </div>
      );
    }

    return summary

  }
}

const mapStateToProps = ({ ingredients, orders }) => {
  const { list } = ingredients;
  const { purchased } = orders;
  return { list, purchased };
}

export default connect(mapStateToProps)(Checkout);
