import React, { Fragment, Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Logo from 'atoms/Logo';
import Icon from 'atoms/Icon';
import Avatar from 'atoms/Avatar';
import Burger from 'atoms/Burger';
import Button from 'atoms/Button';
import Search from 'molecules/Search';
import UserInfo from 'molecules/UserInfo/ui';

const cn = bemHelper('header');

class Header extends Component {
  state = {
    showUserInfo: false
  }

  toggleUserInfo = () => {
    const { showUserInfo } = this.state;
    this.setState({
      showUserInfo: !showUserInfo
    });
  }

  logout = () => {
    const { logout } = this.props;
    logout();
    this.toggleUserInfo();
  }

  render() {
    const {
      mix,
      toggleShow,
      signIn,
      userInfo,
      getSearch,
      searchQuery,
      changeSearch,
      readyAuth
    } = this.props;
    const { showUserInfo } = this.state;

    return (
      <div {...cn('', '', mix)}>
        <Burger mix={cn('icon-menu').className} toggleShow={toggleShow} />
        <Logo />
        <Search
          mix={cn('search').className}
          changeSearch={changeSearch}
          getSearch={getSearch}
          searchQuery={searchQuery}
        />
        {readyAuth && (
          <Fragment>
            <Icon mix={cn('icon-upload').className} icon="img/icons/upload.svg" />
            <Icon mix={cn('icon-notification').className} icon="img/icons/notification.svg" />
          </Fragment>
        )}
        <Fragment>
          {readyAuth ? (
            <Fragment>
              <Avatar
                mix={cn('avatar').className}
                avatar={userInfo.avatar}
                effect={this.toggleUserInfo}
              />
              <UserInfo userInfo={userInfo} showUserInfo={showUserInfo} logout={this.logout} />
            </Fragment>
          ) : (
            <Button text="Sign in" effect={signIn} />
          )}
        </Fragment>
      </div>
    )
  }
}

Header.propTypes = {
  mix: T.string,
  toggleShow: T.func.isRequired,
  signIn: T.func.isRequired,
  userInfo: T.object,
  getSearch: T.func.isRequired,
  logout: T.func.isRequired,
  searchQuery: T.string.isRequired,
  changeSearch: T.func.isRequired,
  readyAuth: T.bool.isRequired
};

Header.defaultProps = {
  mix: '',
  userInfo: null
};

export default Header;
