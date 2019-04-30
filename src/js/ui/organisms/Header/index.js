import React, { Fragment, Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Wrapper } from 'atoms';
import { TopBar } from './Components/TopBar';
import { BodyBar } from './Components/BodyBar';

const cn = bemHelper('header');

export const Header = ({
  mix,
  authIn,
  userInfo,
  searchString,
  onSearchChange
}) => {
  return (
    <Wrapper mix={cn('wrapper').className} type="fluid" style={{ padding: 0 }}>
      <TopBar userInfo={userInfo} authIn={authIn} />
      <BodyBar onSearchChange={onSearchChange} searchString={searchString} />
    </Wrapper>
  );
};

Header.propTypes = {
  // mix: T.string,
  // history: T.object.isRequired,
  // toggleShow: T.func.isRequired,
  // authIn: T.func.isRequired,
  // userInfo: T.object,
  // logout: T.func.isRequired,
  // searchQuery: T.string.isRequired,
  // getSearchList: T.func.isRequired,
  // readyAuth: T.bool.isRequired
};

Header.defaultProps = {
  // mix: '',
  // userInfo: null
};
