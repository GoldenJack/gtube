import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';

import WithPreloader from 'molecules/WithPreloader';
import Category from 'organisms/Category';

const cn = bemHelper('home');

class Trending extends Component {
  componentDidMount() {
    const { getTrendingVideos, readyTrending } = this.props;
    !readyTrending && getTrendingVideos();
  }

  render() {
    const { readyTrending, trending: { items } } = this.props;
    return (
      <div {...cn()}>
        <WithPreloader readyContent={readyTrending}>
          <Category
            title="Trending"
            description="Most popular videos at the moment"
            videos={items}
          />
        </WithPreloader>
      </div>
    );
  }
}

Trending.propTypes = {
  readyTrending: T.bool.isRequired,
  getTrendingVideos: T.func.isRequired,
  trending: T.oneOfType([
    T.object,
    T.array
  ]).isRequired
};

export default Trending;
