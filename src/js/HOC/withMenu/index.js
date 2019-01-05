import React, { Component, Fragment } from 'react';

const withMenu = WrappedComponent => class extends Component {
  state = {
    showMenu: true,
    isMobile: false
  };

  componentDidMount() {
    const widthWindow = window.innerWidth;
    if (widthWindow <= 768) {
      this.setState({
        isMobile: true,
        showMenu: false
      });
    }
  }

  toggleShow = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu
    });
  }

  render() {
    const { ...wrappedComponentProps } = this.props;
    return (
      <Fragment>
        <WrappedComponent
          {...wrappedComponentProps}
          {...this.state}
          toggleShow={this.toggleShow}
        />
      </Fragment>
    );
  }
};

export default withMenu;
