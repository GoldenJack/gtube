import React from 'react';
import bemHelper from 'utils/bem-helper';
import { isEmpty } from 'utils/helper';
import './style.scss';

import { Avatar, Button, Icon, Wrapper } from 'atoms';

const cn = bemHelper('top-bar');

export const TopBar = ({
  authIn,
  userInfo
}) => {
  const userAuth = !isEmpty(userInfo);
  return (
    <div {...cn('')}>
      <Wrapper mix={cn('wrapper').className}>
        {userAuth && (
          <Avatar avatar={userInfo.avatar} size="small" />
        )}
        <Button mix={cn('button').className} onClick={authIn}>
          <Icon mix={cn('icon-power').className} active={!userAuth} icon="power" size="small" />
        </Button>
      </Wrapper>
    </div>
  );
};
