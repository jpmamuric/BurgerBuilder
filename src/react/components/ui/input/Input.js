import React from 'react'

import classes from './Input.css'

const Input = props => {
  let inputElement = null;
  const { InputElement, Input, Label, InputElementInvalid} = classes;
  const checkValidation = props.invalid && props.touched ? InputElementInvalid : InputElement;

  switch (props.elementType) {
    case ('input'):
      inputElement = (
        <input
          onChange={props.handleOnChange}
          className={checkValidation} {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          onChange={props.handleOnChange}
          className={checkValidation} {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case ('select'):
      inputElement = (
        <select
          className={InputElement}
          value={props.value}
          onChange={props.handleOnChange}
          {...props.elementConfig}>
          {
            props.elementConfig.options.map( option => (
              <option key={option.value} value={option.value}>
                { option.displayValue }
              </option>
            ))
          }
        </select>
      )
      break;
    default:
      inputElement = (
        <input
          onChange={props.handleOnChange}
          className={InputElement} {...props.elementConfig}
          value={props.value}
        />
      )
  }
  return (
    <div className={Input}>
      <label className={Label}> { props.label }</label>
      { inputElement }
    </div>

  )
}

export default Input;
