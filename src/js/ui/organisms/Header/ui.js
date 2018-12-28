import React from 'react';
// import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Logo from 'atoms/Logo';
import Icon from 'atoms/Icon';
import Avatar from 'atoms/Avatar';
import Search from 'molecules/Search';

const cn = bemHelper('header');

const Header = ({ mix }) => (
  <div {...cn('', '', mix)}>
    <Icon mix={cn('icon-menu').className} icon="img/icons/menu.svg" />
    <Logo />
    <Search mix={cn('search').className} />
    <Icon mix={cn('icon-upload').className} icon="img/icons/upload.svg" />
    <Icon mix={cn('icon-notification').className} icon="img/icons/notification.svg" />
    <Avatar mix={cn('avatar').className} />
  </div>
);

Header.propTypes = {
  mix: Text.string
};

Header.defaultProps = {
  mix: ''
};

export default Header;
