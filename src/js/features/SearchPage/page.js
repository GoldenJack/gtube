import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import { sortVideos } from 'utils/helper';

import WithPreloader from 'molecules/WithPreloader';
import Category from 'organisms/Category';
import VideoItem from 'molecules/VideoItem';

const cn = bemHelper('search-page');

class SearchPage extends Component {
  sortResults = category => {
    const { searchResult } = this.props;

    const result = searchResult.items.filter(({ id: { kind } }) => {
      return kind.split('#')[1] === category;
    });

    return result;
  }

  _renderVideos = videos => {
    return videos.map(video => {
      return (
        <VideoItem
          mix={cn('video-item').className}
          key={video.id}
          video={video}
        />
      );
    });
  };

  _renderContent = () => {
    const { searchResult } = this.props;
    if (searchResult) {
      const videos = sortVideos(this.sortResults('video'));
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
        >
          {this._renderVideos(videos)}
        </Category>
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
  searchQuery: T.string.isRequired,
  searchResult: T.any,
  searchReady: T.bool.isRequired
};

SearchPage.defaultProps = {
  searchResult: false
};

export default SearchPage;
