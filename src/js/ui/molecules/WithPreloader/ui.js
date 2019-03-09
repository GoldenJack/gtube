import React, { Fragment } from 'react';
import * as T from 'prop-types';
import { OK } from 'constants/httpStatusCode';

import Preloader from 'atoms/Preloader';

const WithPreloader = ({ children, ready }) => {
  if (ready !== OK) return (<Preloader />);
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

WithPreloader.propTypes = {
  ready: T.string.isRequired,
  children: T.any.isRequired
};

export default WithPreloader;
