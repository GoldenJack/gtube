import React, { Fragment } from 'react';
import * as T from 'prop-types';

import Preloader from 'atoms/Preloader';

const WithPreloader = ({ readyContent, children }) => (
  <Fragment>
    {
      readyContent
        ? children
        : (
          <Preloader />
        )
    }
  </Fragment>
);

WithPreloader.propTypes = {
  readyContent: T.bool.isRequired,
  children: T.any.isRequired
};

export default WithPreloader;
