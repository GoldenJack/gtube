import React, { Fragment } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('avatar');

const Avatar = ({ avatar, mix, size }) => (
  <div {...cn('', size, mix)}>
    <img
      {...cn('image')}
      src={avatar}
      alt="/"
    />
  </div>
);

Avatar.propTypes = {
  avatar: T.string.isRequired,
  mix: T.string,
  size: T.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'extra-large'
  ])
};

Avatar.defaultProps = {
  mix: '',
  size: 'medium'
};

export default Avatar;
