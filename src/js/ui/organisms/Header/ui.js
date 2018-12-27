import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';

import Logo from 'atoms/Logo';

const cn = bemHelper('header');

const Header = () => (
  <div {...cn()}>
    <Logo />
    header
  </div>
);

export default Header;
