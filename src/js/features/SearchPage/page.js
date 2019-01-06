import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';

import WithPreloader from 'molecules/WithPreloader';
import Category from 'organisms/Category';

const cn = bemHelper('search-page');

class SearchPage extends Component {
  componentDidMount() {
    // const {
    //   accessToken,
    //   readyAuth,
    //   readyLiked,
    //   getLikedVideos
    // } = this.props;
    // readyAuth && !readyLiked && getLikedVideos(accessToken);
  }

  componentDidUpdate(prevProps) {
    // const {
    //   accessToken,
    //   readyAuth,
    //   readyLiked,
    //   getLikedVideos
    // } = this.props;

    // if (prevProps.readyAuth !== readyAuth && prevProps.readyLiked !== !readyLiked) {
    //   readyAuth && !readyLiked && getLikedVideos(accessToken);
    // }
  }

  _renderContent = () => {
    const { searchResult } = this.props;
    if (searchResult) {
      const {
        items,
        pageInfo: {
          totalResults
        }
      } = searchResult;
      return (
        <Category
          title={`По вашему запросу найдено: ${totalResults} видеозаписей`}
          description={`В целях производительности отображено: ${items.length}`}
          videos={items}
          withoutStat
        />
      );
    } else {
      return (
        <p>Loading a videos</p>
      );
    }
  }

  render() {
    const { searchQuery, searchReady } = this.props;
    return (
      <div {...cn()}>
        <div {...cn('info')}>
          <h3 {...cn('title-query')}>Мы ищем: {searchQuery}</h3>
        </div>
        <WithPreloader readyContent={searchReady}>
          {this._renderContent()}
        </WithPreloader>
      </div>
    );
  }
}

SearchPage.propTypes = {
  searchResult: T.any.isRequired
};

export default SearchPage;
