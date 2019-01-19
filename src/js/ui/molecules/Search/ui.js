import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Icon from 'atoms/Icon';
import Input from 'atoms/Input';

const cn = bemHelper('search');

class Search extends Component {
  state = {
    mobileSearchShow: false
  }

  searchFocus = () => {
    // TODO: FIXED THAT
    // const { history } = this.props;
    window.location.href = '#/search';
  }

  toggleShowSearch = () => {
    const { mobileSearchShow } = this.state;
    this.setState({
      mobileSearchShow: !mobileSearchShow
    });
  }

  render() {
    const { mix, getSearchList, searchQuery } = this.props;
    const { mobileSearchShow } = this.state;
    const toggleClass = !mobileSearchShow ? 'close' : 'open';

    return (
      <div {...cn('', toggleClass, mix)}>
        <Icon
          mix={cn('icon').className}
          icon="img/icons/search.svg"
          effect={this.toggleShowSearch}
        />
        <Input
          type="text"
          mix={cn('input').className}
          value={searchQuery}
          onFieldChange={getSearchList}
          onFocus={this.searchFocus}
        />
      </div>
    );
  }
}

Search.propTypes = {
  mix: T.string,
  searchQuery: T.string.isRequired,
  getSearchList: T.func.isRequired
};

Search.defaultProps = {
  mix: ''
};

export default Search;
