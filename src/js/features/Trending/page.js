import React, { useEffect } from 'react';
import * as T from 'prop-types';

import Wrapper from 'atoms/Wrapper';
import WithPreloader from 'molecules/WithPreloader';
import Category from 'organisms/Category';

const propTypes = {
  readyTrending: T.bool.isRequired,
  getTrendingVideos: T.func.isRequired,
  trending: T.object
};

const defaultProps = {
  trending: {}
};

const Trending = ({
  getTrendingVideos,
  readyTrending,
  trending
}) => {
  useEffect(() => { !readyTrending && getTrendingVideos(); }, []);

  const { items = [] } = trending;
  return (
    <Wrapper>
      <WithPreloader readyContent={readyTrending}>
        <Category
          title="Trending"
          description="Most popular videos at the moment"
          videos={items}
        />
      </WithPreloader>
    </Wrapper>
  );
};

Trending.propTypes = propTypes;
Trending.defaultProps = defaultProps;

export default Trending;
