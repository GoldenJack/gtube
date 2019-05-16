import React from 'react';
import * as T from 'prop-types';
import { getIcon } from './icons';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('icon');

export const Icon = ({ icon, size, mix, active, ...props }) => {
  const activeCN = active ? mix : `${mix} ${mix}--active`;
  return (
    <div {...cn('', size, activeCN)}>
      {getIcon({ icon, ...{ ...props } })}
    </div>
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
