import React, { useEffect, useMemo } from 'react';
import * as T from 'prop-types';
import { api } from 'src/api';
import { topic } from 'constants/topic';
import { getRandomTopic, sortVideos } from 'utils/helper';
import { useFetch } from 'hooks';
import { COMPLETE } from 'constants/fetchStatus';

import { Wrapper } from 'atoms/Wrapper';
import Category from 'organisms/Category';
import WithPreloader from 'molecules/WithPreloader';

const randomTopic = getRandomTopic(topic);

const Home = () => {
  const [data, fetchStatus, fetchData] = useFetch(api.search.getTopic);

  console.log('fetchData', fetchData)

  useEffect(() => {
    fetchData(topic['gaming'].parrentTopic);
  }, [fetchData]);

  console.log(data)

  const _render = () => {
    const videos = sortVideos(data.items);
    
    return (
      <Category
        // key={titleTopic}
        // title={titleTopic}
        // description={titleTopic}
        videos={videos}
      />
    );
  };

  return (
    <Wrapper>
      {/* <WithPreloader ready={fetchStatus}> */}
        { fetchStatus === COMPLETE && _render() }
      {/* </WithPreloader> */}
    </Wrapper>
  );
};

export default Home;
