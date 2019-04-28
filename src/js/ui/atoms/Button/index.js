import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('btn');

export const Button = ({ mix, type, view, children, ...props }) => (
  <button type={type} {...cn('', view, mix)} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  mix: T.string,
  children: T.node.isRequired,
  type: T.string,
  view: T.string
};

Button.defaultProps = {
  mix: '',
  view: '',
  type: 'button'
};
