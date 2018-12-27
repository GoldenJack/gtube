import React from 'react';
import * as T from 'prop-types';
import { Link } from 'react-router-dom';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('logo');

const Logo = ({ mix, logo }) => (
  <div {...cn('', '', mix)}>
    <Link to="/">
      <img src={logo} alt="GTUBE" />
    </Link>
  </div>
);

Logo.propTypes = {
  mix: T.string,
  logo: T.string
};

Logo.defaultProps = {
  mix: '',
  logo: 'img/logo.svg'
};

export default Logo;
