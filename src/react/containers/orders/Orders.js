import React, { Component } from 'react';
import { connect } from 'react-redux';

import premiumBurgerIcon from '../../../assets/images/premium.png'
import axios from '../../../axios-orders';
import * as actions from '../../../redux/store/actions/orders_action'
import classes from './Orders.css';
import Order from '../../components/order/Order';
import ErrorHandler from '../hoc/ErrorHandler';
import Spinner from '../../components/ui/spinner/Spinner'

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  renderFetchedOrders = () => {
    return this.props.list.map( order => (
      <Order key={order.id} ingredients={order.ingredients} orderData={order.orderData} price={order.price} />
    ))
  }

  render() {
    let orders = <Spinner />
    if(!this.props.loading) {
      orders = this.renderFetchedOrders();
    }
    return (
        <div>
          <div>Premium Orders:</div>
          <img src={premiumBurgerIcon} className={classes.info} alt='premium burger icon'/>
          <div className={classes.orders}>
            { orders }
          </div>
        </div>


    )
  }
}

const mapStateToProps = ({ orders }) => {
  const { list, loading } = orders;
  return { list, loading };
}

export default connect(mapStateToProps, actions)(ErrorHandler(Orders, axios));
