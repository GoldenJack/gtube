import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';

const cn = bemHelper('icon');

const Icon = ({ icon, mix }) => (
  <img src={icon} {...cn('', '', mix)} alt="icon" />
);

Icon.propTypes = {
  icon: T.string.isRequired,
  mix: T.string
};

Icon.defaultProps = {
  mix: ''
};

export default Icon;
