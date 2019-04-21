import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('input');

export const Input = ({
  mix,
  type,
  value,
  ...props
}) => {
  return (
    <input
      {...cn('', '', mix)}
      type={type}
      value={value}
      {...props}
    />
  );
};

Input.propTypes = {
  mix: T.string,
  type: T.string.isRequired,
  value: T.string.isRequired,
};

Input.defaultProps = {
  mix: '',
};
