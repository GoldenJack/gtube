import React, { Fragment } from 'react';
import T from 'prop-types';
import { PENDING, COMPLETE } from 'constants/fetchStatus';

import { Preloader } from 'atoms';

export const WithPreloader = ({ children, fetchStatus }) => {
  if (fetchStatus === PENDING) return (<Preloader />);
  if (fetchStatus === COMPLETE) return (<Fragment>{children}</Fragment>);
  return null;
};

WithPreloader.propTypes = {
  fetchStatus: T.string.isRequired,
  children: T.any.isRequired
};
