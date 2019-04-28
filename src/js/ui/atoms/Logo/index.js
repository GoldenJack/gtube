import React from 'react';
import * as T from 'prop-types';
import { Link } from 'react-router-dom';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon } from 'atoms';

const cn = bemHelper('logo');

export const Logo = ({ mix }) => (
  <div {...cn('', '', mix)}>
    <Link to="/">
      <Icon icon="logo" />
    </Link>
  </div>
);

Logo.propTypes = {
  mix: T.string
};

Logo.defaultProps = {
  mix: ''
};
