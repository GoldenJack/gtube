import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';

const cn = bemHelper('icon');

export const Icon = ({ icon, mix, ...props }) => (
  <img
    {...cn('', '', mix)}
    src={icon}
    alt="icon"
    role="none"
    {...props}
  />
);

Icon.propTypes = {
  effect: T.func,
  icon: T.string.isRequired,
  mix: T.string
};

Icon.defaultProps = {
  effect: null,
  mix: ''
};
