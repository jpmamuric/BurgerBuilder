import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Aux from '../hoc/Aux';
import ErrorHandler from '../hoc/ErrorHandler';
import Burger from '../../components/burger/Burger';
import BuilderControls from '../../components/burger/controls/BuilderControls';
import OrderSummary from '../../components/burger/order_summary/OrderSummary';
import Modal from '../../components/ui/modal/Modal';
import Spinner from '../../components/ui/spinner/Spinner';

import { handleOrderInit } from '../../../redux/store/actions/orders_action';
import {
  initIngredients,
  addIngredients,
  removeIngredients
} from '../../../redux/store/actions/ingredients_action'


class BurgerBuilder extends Component {
  state = {
    orderingNow: false
  }

  componentDidMount() {
    const { initIngredients } = this.props;
    initIngredients()
  }

  updateCanOrder(ingredients) {
    const sum = Object.keys(ingredients)
      .map( ingredient => {
        return ingredients[ingredient]
      })
      .reduce( (sum, val) => {
        return sum + val;
      } , 0);

    return sum > 0;
  }

  handleOrderNow = () => {
    this.setState({ orderingNow: true });
  }

  handleCancelOrder = () => {
    this.setState({ orderingNow: false });
  }

  handleContinueOrder = () => {
    this.props.handleOrderInit();
    this.props.history.push('/checkout');
  }

  render(){
    const { orderingNow } = this.state;
    const { addIngredients, removeIngredients, list, totalPrice, loading } = this.props;

    const disabledInfo = {
      ...this.props.list
    }

    for (let key in disabledInfo ) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null;

    if(loading) {
      orderSummary = <Spinner />
    }

    let burger = this.props.error ? <p>ingredients cannot be loaded</p> : <Spinner />

  if (list) {
      burger = (
        <Aux>
          <Burger ingredients={list}/>
          <BuilderControls
            addIngredients={addIngredients}
            removeIngredients={removeIngredients}
            disabled={disabledInfo}
            totalPrice={totalPrice}
            handleOrderNow={this.handleOrderNow}
            canOrder={this.updateCanOrder(this.props.list)}
          />
        </Aux>
      );

      orderSummary = <OrderSummary
        price={totalPrice}
        ingredients={list}
        continueOrder={this.handleContinueOrder}
        cancelOrder={this.handleCancelOrder}
        />
      }


    return (
      <Aux>
        <Modal show={orderingNow} hide={this.handleCancelOrder}>
          { orderSummary }
        </Modal>
        { burger }
      </Aux>
    )
  }
}

const mapStateToProps = ({ ingredients }) => {
  const { list, totalPrice, loading, error } = ingredients;
  return { list, totalPrice, loading, error };
}

export default connect(mapStateToProps, {
  initIngredients,
  addIngredients,
  removeIngredients,
  handleOrderInit
})(ErrorHandler(BurgerBuilder,axios));
