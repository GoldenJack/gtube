import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('avatar');

export const Avatar = ({ avatar, mix, size, ...props }) => (
  <div {...cn('', size, mix)} role="none" {...props}>
    <img {...cn('image')} src={avatar} alt="/" />
  </div>
);

Avatar.propTypes = {
  mix: T.string,
  avatar: T.string,
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
};
