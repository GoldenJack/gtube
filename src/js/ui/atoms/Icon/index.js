import React from 'react';
import * as T from 'prop-types';
import SVGInline from 'react-svg-inline';
import { icons } from 'constants/icons';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('icon');

export const Icon = ({ icon, mix, active, ...props }) => {
  const activeCN = active ? mix : `${mix} ${mix}--active`;
  return (
    <SVGInline {...cn('', '', activeCN)} svg={icons[icon]} {...props} />
  );
};

Icon.propTypes = {
  active: T.bool,
  icon: T.string.isRequired,
  mix: T.string
};

Icon.defaultProps = {
  active: false,
  mix: ''
};
