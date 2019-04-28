import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Input } from 'atoms';

const cn = bemHelper('field');

export const Field = ({
  mix,
  view,
  type,
  value,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  return (
    <div {...cn('', view, mix)}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
};

Input.propTypes = {
  mix: T.string,
  view: T.string,
  type: T.string.isRequired,
  value: T.string.isRequired,
  onChange: T.func.isRequired
};

Input.defaultProps = {
  mix: '',
  view: ''
};
