import React, { Fragment } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';

const cn = bemHelper('avatar');

const Avatar = ({ avatar, mix, size }) => (
  <Fragment>
    {avatar ? (
      <img
        {...cn('', size, mix)}
        src={avatar}
        alt="/"
      />
    ) : null}
  </Fragment>
);

Avatar.propTypes = {
  avatar: T.string,
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
  avatar: 'img/no-avatar.png',
  mix: '',
  size: 'medium'
};

export default Avatar;
