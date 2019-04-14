import React, { useEffect } from 'react';
import * as T from 'prop-types';

import Default from 'templates/Default';

const Layout = ({
  googleApi,
  initGoogleApi,
  ...anyProps
}) => {
  const setFloating = () => {
    const widthWindow = window.innerWidth;
    const page = anyProps.location.pathname.indexOf('watch') !== -1;

    if (widthWindow <= 768 || page) return true;
    return false;
  };

  const floating = setFloating();

  useEffect(() => !googleApi && initGoogleApi(), []);
  useEffect(() => initGoogleApi(), [googleApi]);

  return (
    <Default floating={floating} {...anyProps} />
  );
};

Layout.propTypes = {
  googleApi: T.object,
  initGoogleApi: T.func.isRequired
};

Layout.defaultProps = {
  googleApi: null
};

export default Layout;
