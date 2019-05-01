import React from 'react';
import * as T from 'prop-types';
import SVGInline from 'react-svg-inline';
import { icons } from 'constants/icons';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('icon');

export const Icon = ({ icon, size, mix, active, ...props }) => {
  const activeCN = active ? mix : `${mix} ${mix}--active`;
  return (
    <SVGInline {...cn('', size, activeCN)} svg={icons[icon]} {...props} />
  );
};

Icon.propTypes = {
  mix: T.string,
  active: T.bool,
  icon: T.string.isRequired,
  size: T.string
};

Icon.defaultProps = {
  mix: '',
  active: false,
  size: ''
};
