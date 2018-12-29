import React, { Component, Fragment } from 'react';

const withMenu = WrappedComponent => class extends Component {
  state = {
    showMenu: true
  };

  toggleShow = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu
    });
  }

  render() {
    const { ...wrappedComponentProps } = this.props;
    const { showMenu } = this.state;

    return (
      <Fragment>
        <WrappedComponent
          {...wrappedComponentProps}
          showMenu={showMenu}
          toggleShow={this.toggleShow}
        />
      </Fragment>
    );
  }
};

export default withMenu;
