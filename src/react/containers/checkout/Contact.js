import React, { Component } from 'react';
import { connect } from 'react-redux'

import axios from '../../../axios-orders';
import errorHandler from '../hoc/ErrorHandler';
import * as actions from '../../../redux/store/actions/orders_action';
import Button from '../../components/ui/button/Button';
import Spinner from '../../components/ui/spinner/Spinner';
import Input from '../../components/ui/input/Input';
import classes from './Contact.css';

class Contact extends Component {
  state = {
    orderForm: {
        name: {
          elementType: 'input',
          elementConfig : {
            type: 'text',
            placeholder: 'Name'
          },
          value: '',
          valid: false,
          validation: {
            required: true
          },
          touched: false,
          error: 'name cannot be blank'
        },
        street: {
          elementType: 'input',
          elementConfig : {
            type: 'text',
            placeholder: 'Street Address'
          },
          value: '',
          valid: false,
          validation: {
            required: true
          },
          touched: false,
          error: 'street cannot be blank'
        },
        zipCode: {
          elementType: 'input',
          elementConfig : {
            type: 'text',
            placeholder: 'Zipcode'
          },
          value: '',
          valid: false,
          validation: {
            required: true,
            minLength: 5,
            maxLength: 5,
            isNumeric: true
          },
          touched: false,
          error: 'zipcode error'
        },
        country: {
          elementType: 'input',
          elementConfig : {
            type: 'text',
            placeholder: 'Country'
          },
          value: '',
          valid: false,
          validation: {
            required: true
          },
          touched: false,
          error: 'please enter a country'
        },
        email: {
          elementType: 'input',
          elementConfig : {
            type: 'email',
            placeholder: 'Email'
          },
          value: '',
          valid: false,
          validation: {
            required: true,
            isEmail: true
          },
          touched: false,
          error: 'must provide valid email'
        },
        deliveryMethod: {
          elementType: 'select',
          elementConfig : {
            options: [
              { value: 'premium', displayValue: 'Premium' },
              { value: 'standard', displayValue: 'Standard' },
            ]
          },
          value: 'standard',
          valid: true,
          validation: {
            required: true
          }
        }
    },
    formIsValid: false
  }

  handleOrderSubmit = e => {
    e.preventDefault();
    const formData = {};

    //create key value pair
    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value
    }

    this.setState({ loading: true });

    const order = {
      ingredients: this.props.list,
      price: this.props.totalPrice,
      orderData: formData
    };

    this.props.handleOrderPurchase(order)
  }

  handleValidation(value, rules) {
    let isValid = true;

    if(rules.required){
      isValid = value.trim() !== '' && isValid;
    }

    if(rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if(rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    if ( rules.isEmail ) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid
    }

    if ( rules.isNumeric ) {
        const pattern = /^\d+$/;
        isValid = pattern.test( value ) && isValid
    }

    return isValid
  }

  handleOnChange = (e, inputId) => {
    const immutableOrderFormCopy = {
      ...this.state.orderForm
    }

    const updatedOrderForm = {
      ...immutableOrderFormCopy[inputId]
    }

    updatedOrderForm.value = e.target.value;
    updatedOrderForm.valid = this.handleValidation(updatedOrderForm.value, updatedOrderForm.validation)
    updatedOrderForm.touched = true;
    immutableOrderFormCopy[inputId] = updatedOrderForm;
    let formIsValid = true;
    for (let inputId in immutableOrderFormCopy) {
      formIsValid = immutableOrderFormCopy[inputId].valid && formIsValid;
    }

    this.setState({ orderForm: immutableOrderFormCopy, formIsValid })
  }

  render() {
    const { contact } = classes;
    const formArray = [];
    for (let key in this.state.orderForm) {
        formArray.push({
          id: key,
          config: this.state.orderForm[key]
        })
    }

    let form = (
      <form onSubmit={this.handleOrderSubmit}>
        { formArray.map( formElement => {
            const { elementType, elementConfig, value, valid, touched, error } = formElement.config;
            return (
              <div key={formElement.id}>
                <Input
                  elementType={elementType}
                  elementConfig={elementConfig}
                  value={value}
                  invalid={!valid}
                  touched={touched}
                  handleOnChange={e=>this.handleOnChange(e,formElement.id )}
               />
             { touched && !valid ? <div> {error}</div> : null }
              </div>
            )
          })
        }
        <Button btnType="Success" disabled={!this.state.formIsValid} >Order</Button>
      </form>
    );

    if (this.props.loading) {
      form = <Spinner />
    }

    return (
      <div className={ contact }>
        Contact Information
        { form }
      </div>
    )
  }
}

const mapStateToProps = ({ ingredients, orders }) => {
  const { list, totalPrice } = ingredients;
  const { loading } = orders;
  return { list, totalPrice, loading};
}

export default connect(mapStateToProps, actions)(errorHandler(Contact, axios));
