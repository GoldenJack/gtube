import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('btn');

const Button = ({ mix, type, effect, text }) => {
  const runEffect = e => {
    e.preventDefault();
    effect();
  };

  return (
    <a href="#" {...cn('', type, mix)} onClick={runEffect}>
      {text}
    </a>
  );
};

Button.propTypes = {
  mix: T.string,
  text: T.string.isRequired,
  type: T.string,
  effect: T.func
};

Button.defaultProps = {
  mix: '',
  effect: null,
  type: 'pink'
};

export default Button;
