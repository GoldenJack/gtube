import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Header from 'organisms/Header';

const cn = bemHelper('default-template');

const Default = ({ children }) => (
  <div {...cn()}>
    <Header />
    {children}
  </div>
);

Default.propTypes = {
  children: T.object.isRequired
};

export default Default;
