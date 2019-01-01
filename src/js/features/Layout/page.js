import React, { Component } from 'react';
import * as T from 'prop-types';
import withMenu from 'HOC/withMenu';
import './style.scss';

import Default from 'templates/Default';

class Layout extends Component {
  componentDidMount() {
    const { googleApi, initGoogleApi } = this.props;
    !googleApi && initGoogleApi();
  }

  render() {
    const { ...props } = this.props;
    return (
      <Default {...props} />
    );
  }
}

Layout.propTypes = {
  googleApi: T.object,
  initGoogleApi: T.func.isRequired,
  children: T.object.isRequired,
  showMenu: T.bool.isRequired
};

Layout.defaultProps = {
  googleApi: null
};

export default withMenu(Layout);
