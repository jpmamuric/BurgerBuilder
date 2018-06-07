import React, { Component } from 'react';

import Aux from '../../containers/hoc/Aux';
import Toolbar from '../navigation/toolbar/Toolbar';
import Sidedrawer from '../navigation/sidedrawer/Sidedrawer';
import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSidedrawer: false
  }

  handleSidedrawerClose = () => {
    this.setState({ showSidedrawer : false })
  }

  handleSidedrawerToggle = () => {
    this.setState((prevState) => {
      return { showSidedrawer : !prevState.showSidedrawer }
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.handleSidedrawerToggle}/>
        <Sidedrawer open={this.state.showSidedrawer} close={this.handleSidedrawerClose} />
        { /*<div>Toolbar, SideDrawer, Backdrop</div> */}
        <main className={classes.content}>
          { this.props.children }
        </main>
      </Aux>
    )
  }

}

export default Layout;
