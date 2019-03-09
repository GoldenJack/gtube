import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('avatar');

const Avatar = ({ avatar, mix, size, effect }) => (
  <div {...cn('', size, mix)} role="none" onClick={effect}>
    <img
      {...cn('image')}
      src={avatar}
      alt="/"
    />
  </div>
);

Avatar.propTypes = {
  mix: T.string,
  avatar: T.string,
  effect: T.func,
  size: T.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'extra-large'
  ]),
};

Avatar.defaultProps = {
  mix: '',
  avatar: 'img/no-avatar.png',
  size: 'medium',
  effect: null
};

export default Avatar;
