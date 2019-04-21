import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Button } from 'atoms';

const cn = bemHelper('user-info');

class UserInfo extends Component {
  componentDidMount() {

  }

  render() {
    const {
      mix,
      showUserInfo,
      logout,
      userInfo: {
        fullName
      }
    } = this.props;
    const toggleClass = showUserInfo ? 'open' : 'close';

    return (
      <div {...cn('', toggleClass, mix)}>
        <div {...cn('description')}>
          <h5 {...cn('fullname')}>{fullName}</h5>
        </div>
        <div {...cn('logout')}>
          <Button mix={cn('button-logout').className} text="Logout" effect={logout} />
        </div>
      </div>
    )
  }
}

UserInfo.propTypes = {
  mix: T.string,
  showUserInfo: T.bool.isRequired,
  logout: T.func.isRequired,
  userInfo: T.object.isRequired
};

UserInfo.defaultProps = {
  mix: ''
};

export default UserInfo;
