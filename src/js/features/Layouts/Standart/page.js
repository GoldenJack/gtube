import React, { Component } from 'react';
import * as T from 'prop-types';
import './style.scss';

import Default from 'templates/Default';

class Standart extends Component {
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

Standart.propTypes = {
  googleApi: T.object,
  initGoogleApi: T.func.isRequired,
  children: T.array.isRequired
};

Standart.defaultProps = {
  googleApi: null
};

export default Standart;
