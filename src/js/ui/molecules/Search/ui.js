import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Icon from 'atoms/Icon';
import Input from 'atoms/Input';

const cn = bemHelper('search');

class Search extends Component {
  searchFocus = () => {
    // TODO: FIXED THAT
    // const { history } = this.props;
    window.location.href = '#/search';
  }

  render() {
    const { mix, changeSearch, searchQuery, getSearch } = this.props;
    return (
      <div {...cn('', '', mix)}>
        <Icon mix={cn('icon').className} icon="img/icons/search.svg" />
        <Input
          type="text"
          mix={cn('search').className}
          value={searchQuery}
          onFieldChange={changeSearch}
          onEnter={getSearch}
          onFocus={this.searchFocus}
        />
      </div>
    )
  }
}

Search.propTypes = {
  mix: T.string,
  searchQuery: T.string.isRequired,
  changeSearch: T.func.isRequired,
  getSearch: T.func.isRequired
};

Search.defaultProps = {
  mix: ''
};

export default Search;
