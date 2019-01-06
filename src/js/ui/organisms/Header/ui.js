import React, { Fragment } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Logo from 'atoms/Logo';
import Icon from 'atoms/Icon';
import Avatar from 'atoms/Avatar';
import Burger from 'atoms/Burger';
import Button from 'atoms/Button';
import Search from 'molecules/Search';

const cn = bemHelper('header');

const Header = ({
  mix,
  toggleShow,
  signIn,
  userInfo,
  getSearch,
  searchQuery,
  changeSearch
}) => (
  <div {...cn('', '', mix)}>
    <Burger mix={cn('icon-menu').className} toggleShow={toggleShow} />
    <Logo />
    <Search
      mix={cn('search').className}
      changeSearch={changeSearch}
      getSearch={getSearch}
      searchQuery={searchQuery}
    />
    <Icon mix={cn('icon-upload').className} icon="img/icons/upload.svg" />
    <Icon mix={cn('icon-notification').className} icon="img/icons/notification.svg" />
    <Fragment>
      {userInfo ? (
        <Avatar mix={cn('avatar').className} avatar={userInfo.avatar} />
      ) : (
        <Button text="Sign in" effect={signIn} />
      )}
    </Fragment>
  </div>
);

Header.propTypes = {
  mix: T.string,
  toggleShow: T.func.isRequired,
  signIn: T.func.isRequired,
  userInfo: T.object,
  getSearch: T.func.isRequired,
  searchQuery: T.string.isRequired,
  changeSearch: T.func.isRequired
};

Header.defaultProps = {
  mix: '',
  userInfo: null
};

export default Header;
