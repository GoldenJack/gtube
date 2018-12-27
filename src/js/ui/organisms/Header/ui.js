import React from 'react';
// import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Logo from 'atoms/Logo';
import Icon from 'atoms/Icon';
import Avatar from 'atoms/Avatar';
import Search from 'molecules/Search';

const cn = bemHelper('header');

const Header = () => (
  <div {...cn()}>
    <Icon mix={cn('icon-menu').className} icon="img/menu.svg" />
    <Logo />
    <Search mix={cn('search').className} />
    <Icon mix={cn('icon-upload').className} icon="img/upload.svg" />
    <Icon mix={cn('icon-notification').className} icon="img/notification.svg" />
    <Avatar mix={cn('avatar').className} />
  </div>
);

export default Header;
