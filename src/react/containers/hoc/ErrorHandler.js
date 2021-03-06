import React, { Component } from 'react';

import Aux from './Aux';
import Modal from '../../components/ui/modal/Modal';

const ErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
        error: null
    }

    componentWillMount(){
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    handleErrorModal = () => {
      this.setState({ error: null });
    }

    render(){
      const { error } = this.state;
      return (
        <Aux>
          <Modal show={error} hide={this.handleErrorModal} >
            { error ? error.message : null }
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default ErrorHandler;
