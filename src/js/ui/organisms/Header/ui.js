import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Logo from 'atoms/Logo';
import Icon from 'atoms/Icon';
import Avatar from 'atoms/Avatar';
import Burger from 'atoms/Burger';
import Search from 'molecules/Search';

const cn = bemHelper('header');

const Header = ({ mix, toggleShow }) => (
  <div {...cn('', '', mix)}>
    <Burger mix={cn('icon-menu').className} toggleShow={toggleShow} />
    <Logo />
    <Search mix={cn('search').className} />
    <Icon mix={cn('icon-upload').className} icon="img/icons/upload.svg" />
    <Icon mix={cn('icon-notification').className} icon="img/icons/notification.svg" />
    <Avatar mix={cn('avatar').className} />
  </div>
);

Header.propTypes = {
  mix: T.string,
  toggleShow: T.func.isRequired
};

Header.defaultProps = {
  mix: ''
};

export default Header;
