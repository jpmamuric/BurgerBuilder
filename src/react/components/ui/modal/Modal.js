import React, { Component } from 'react'

import classes from './Modal.css';
import Aux from '../../../containers/hoc/Aux';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState){
    const { show } = this.props;
    return nextProps.show !== show || nextProps.children !== this.props.children
  }

  render() {
    const { children, show, hide } = this.props;
    const { Modal, Modal_Show, Modal_Hide} = classes;

    return (
      <Aux>
        <Backdrop show={show} hide={hide} />
        <div className={ show ? `${Modal} ${Modal_Show}` : `${Modal} ${Modal_Hide}`}>
          { children }
        </div>
      </Aux>
    )
  }
}

export default Modal;
