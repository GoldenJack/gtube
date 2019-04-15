import React, { useEffect, useMemo } from 'react';
import { api } from 'src/api';
import { topic } from 'constants/topic';
import {
  // getRandomTopic,
  sortVideos
} from 'utils/helper';
import { useFetch } from 'hooks';

import { Wrapper } from 'atoms/Wrapper';
import Category from 'organisms/Category';
import WithPreloader from 'molecules/WithPreloader';

// const randomTopic = getRandomTopic(topic);

const Home = () => {
  const [data, fetchStatus, fetchData] = useFetch(api.search.getTopic);
  const { items = [] } = data;

  useEffect(() => {
    fetchData(topic['gaming'].parrentTopic);
  }, [fetchData]);

  const videos = useMemo(() => sortVideos(items), [items]);

  return (
    <Wrapper>
      <WithPreloader fetchStatus={fetchStatus}>
        <Category
          // key={titleTopic}
          // title={titleTopic}
          // description={titleTopic}
          videos={videos}
        />
      </WithPreloader>
    </Wrapper>
  );
};

export default Home;
