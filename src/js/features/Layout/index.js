import React, { useContext } from 'react';
import { AuthContext } from 'context';
import * as T from 'prop-types';

import { Default } from 'templates';

export const Layout = ({ children }) => {
  const { ...props } = useContext(AuthContext);
  return (
    <Default {...props}>
      {children}
    </Default>
  );
};

Layout.propTypes = {
  children: T.node.isRequired
};
