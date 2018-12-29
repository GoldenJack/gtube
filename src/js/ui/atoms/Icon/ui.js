import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';

const cn = bemHelper('icon');

const Icon = ({ icon, mix, effect }) => (
  <img
    {...cn('', '', mix)}
    src={icon}
    onClick={effect}
    alt="icon"
    role="none"
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

export default Icon;
