import React, { useEffect } from 'react';
import { api } from 'src/api';
import { useFetch } from 'hooks';

import { Wrapper } from 'atoms';
import WithPreloader from 'molecules/WithPreloader';
import Category from 'organisms/Category';

const Trending = () => {
  const [data, fetchStatus, fetchData] = useFetch(api.videos.getTrendingVideos);
  const { items = [] } = data;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Wrapper>
      <WithPreloader fetchStatus={fetchStatus}>
        <Category
          title="Trending"
          description="Most popular videos at the moment"
          videos={items}
        />
      </WithPreloader>
    </Wrapper>
  );
};

export default Trending;
