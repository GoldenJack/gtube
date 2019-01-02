import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
// import './style.scss';

import Category from 'organisms/Category';

const cn = bemHelper('home');

class Trending extends Component {
  componentDidMount() {
    const { getTrendingVideos, readyAuth, accessToken } = this.props;
    readyAuth && getTrendingVideos(accessToken);
  }

  componentDidUpdate(prevProps) {
    const { getTrendingVideos, readyAuth, accessToken } = this.props;
    if (readyAuth && readyAuth !== prevProps.readyAuth) {
      getTrendingVideos(accessToken);
    }
  }

  // _renderCategories = () => {
  //   const { categories } = this.props;
  //   return categories.items.map(({ id, snippet: { title } }) => (
  //     <Category
  //       key={id}
  //       title={title}
  //       // description="Original Music Videos featuring music written and produced by Name Namevich"
  //       // videos={[1, 2, 3, 4, 5]}
  //     />
  //   ));
  // }

  render() {
    const { trending: { items } } = this.props;
    return (
      <div {...cn()}>
        <Category
          title="Trending"
          description="Most popular videos at the moment"
          videos={items}
        />
      </div>
    );
  }
}

Trending.propTypes = {
  accessToken: T.string,
  readyAuth: T.bool.isRequired,
  getTrendingVideos: T.func.isRequired,
  trending: T.array
};

Trending.defaultProps = {
  accessToken: '',
  trending: []
};

export default Trending;
