import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Icon from 'atoms/Icon';
import Input from 'atoms/Input';

const cn = bemHelper('search');

const Search = ({ mix }) => (
  <div {...cn('', '', mix)}>
    <Icon mix={cn('icon').className} icon="img/icons/search.svg" />
    <Input type="text" mix={cn('search').className} />
  </div>
);

Search.propTypes = {
  mix: T.string
};

Search.defaultProps = {
  mix: ''
};

export default Search;
