import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import { Link } from 'react-router-dom';
import './style.scss';

const cn = bemHelper('link');

const Preview = ({ mix, to, text }) => (
  <Link to={to} {...cn('', '', mix)} title={text}>{ text }</Link>
);

Preview.propTypes = {
  mix: T.string,
  to: T.string.isRequired,
  text: T.string.isRequired
};

Preview.defaultProps = {
  mix: ''
};

export default Preview;
