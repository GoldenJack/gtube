import React, { useEffect } from 'react';
import * as T from 'prop-types';

import Default from 'templates/Default';

const Standart = ({
  googleApi,
  initGoogleApi,
  ...props
}) => {
  useEffect(() => !googleApi && initGoogleApi(), []);
  useEffect(() => initGoogleApi(), [googleApi]);

  return (
    <Default {...props} />
  );
};

Standart.propTypes = {
  googleApi: T.object,
  initGoogleApi: T.func.isRequired
};

Standart.defaultProps = {
  googleApi: null
};

export default Standart;
