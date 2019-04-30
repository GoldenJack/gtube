import React, { useContext } from 'react';
import { AuthContext, SearchProvider } from 'context';
import * as T from 'prop-types';

import { Default } from 'templates';

export const Layout = ({ children }) => {
  const { ...props } = useContext(AuthContext);
  return (
    <SearchProvider>
      <Default {...props}>
        {children}
      </Default>
    </SearchProvider>
  );
};

Layout.propTypes = {
  children: T.node.isRequired
};
