import React from 'react'

import classes from './Backdrop.css'

const Backdrop = ({ show, hide }) => {
  return (
    show ? <div className={classes.Backdrop} onClick={ hide } />  : null
  )
}




export default Backdrop
