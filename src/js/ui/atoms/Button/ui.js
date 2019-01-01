import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('btn');

const Button = ({ mix, type, effect, text }) => (
  <a href="#" {...cn('', type, mix)} onClick={effect}>
    {text}
  </a>
);

Button.propTypes = {
  text: T.string.isRequired,
  type: T.string,
  effect: T.func,
  mix: T.string
};

Button.defaultProps = {
  effect: null,
  type: 'pink',
  mix: ''
};

export default Button;
