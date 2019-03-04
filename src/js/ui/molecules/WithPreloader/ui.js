import React, { Fragment } from 'react';
import * as T from 'prop-types';
import { OK } from 'constants/httpStatusCode';

import Preloader from 'atoms/Preloader';

const WithPreloader = ({ readyContent, children, ready }) => (
  <Fragment>
    {
      readyContent || ready === OK
        ? children
        : (
          <Preloader />
        )
    }
  </Fragment>
);

WithPreloader.propTypes = {
  readyContent: T.bool.isRequired,
  ready: T.string.isRequired,
  children: T.any.isRequired
};

export default WithPreloader;
