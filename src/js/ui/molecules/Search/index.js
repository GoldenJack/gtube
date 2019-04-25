import React, { Component } from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon, Input } from 'atoms';

const cn = bemHelper('search');

export const Search = ({
  mix,
  getSearchList,
  searchQuery,
  history,

}) => {
  const onFocus = () => {
    history.push('/searching');
  };

  return (
    <div {...cn('', '', mix)}>
      <Icon
        mix={cn('icon').className}
        icon="img/icons/search.svg"
      />
      <Input
        type="text"
        mix={cn('input').className}
        value={searchQuery}
        onChange={getSearchList}
        onFocus={onFocus}
      />
    </div>
  );
}

Search.propTypes = {
  mix: T.string,
  searchQuery: T.string.isRequired,
  getSearchList: T.func.isRequired
};

Search.defaultProps = {
  mix: ''
};
