import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('btn');

export const Button = ({ mix, type, text, ...props }) => {
  return (
    <a href="#" {...cn('', type, mix)} {...props}>
      {text}
    </a>
  );
};

Button.propTypes = {
  mix: T.string,
  text: T.string.isRequired,
  type: T.string
};

Button.defaultProps = {
  mix: '',
  type: 'pink'
};
