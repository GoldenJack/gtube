import React, { Component } from 'react';
import * as T from 'prop-types';
import './style.scss';

import Default from 'templates/Default';

class Layout extends Component {
  componentDidMount() {
    const { googleApi, initGoogleApi } = this.props;
    !googleApi && initGoogleApi();
  }

  componentDidUpdate(prevProps) {
    const { googleApi, initGoogleApi } = this.props;
    if (prevProps.googleApi !== googleApi) {
      initGoogleApi();
    }
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
  children: T.array.isRequired
};

Layout.defaultProps = {
  googleApi: null
};

export default Layout;
