import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('input');

export const Input = ({
  mix,
  type,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      {...cn('', '', mix)}
      type={type}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

Input.propTypes = {
  mix: T.string,
  type: T.string.isRequired,
  value: T.string.isRequired,
  onChange: T.func.isRequired
};

Input.defaultProps = {
  mix: '',
};
