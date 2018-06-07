import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Layout from './react/components/layout/Layout';
import BurgerBuilder from './react/containers/burger_builder/BurgerBuilder';
import LazyLoad from './react/containers/hoc/LazyLoad';

const LazyLoadCheckout = LazyLoad(()=>{
  return import('./react/containers/checkout/Checkout')
});

const LazyLoadOrders = LazyLoad(()=>{
  return import('./react/containers/orders/Orders')
});

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/checkout" component={LazyLoadCheckout} />
          <Route path="/orders" exact component={LazyLoadOrders} />
          <Route path="/" exact component={BurgerBuilder} />
        </Layout>
      </div>
    );
  }
}

export default App;
