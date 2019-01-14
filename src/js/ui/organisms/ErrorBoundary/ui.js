import React, { Component, Fragment } from 'react';
import * as T from 'prop-types';
import { withRouter } from 'react-router-dom';

import Fallback from './Fallback';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    componentStack: null
  };

  componentDidUpdate(prevProps) {
    const { location: { pathname } } = this.props;
    const { hasError } = this.state;

    if (hasError && prevProps.location.pathname !== pathname) {
      this.clearError();
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      componentStack: info.componentStack,
      error
    });
  }

  clearError = () => this.setState({ hasError: false });

  render() {
    const { children } = this.props;
    const { hasError, error, componentStack } = this.state;
    return (
      <Fragment>
        {hasError
          ? <Fallback error={error} componentStack={componentStack} />
          : children
        }
      </Fragment>
    );
  }
}

ErrorBoundary.propTypes = {
  children: T.object.isRequired,
  location: T.object.isRequired
};

export default withRouter(ErrorBoundary);