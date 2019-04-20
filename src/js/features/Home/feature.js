import React, { useEffect, useMemo } from 'react';
import { api } from 'src/api';
import { topic } from 'constants/topic';
import { getRandomTopic } from 'utils/helper';
import { useFetch } from 'hooks';

import PageOfHome from 'pages/PageOfHome';

const randomTopic = getRandomTopic(topic);

const Home = () => {
  const [data, fetchStatus, fetchData] = useFetch(api.search.getTopic);

  useEffect(() => {
    fetchData(randomTopic[0].topicId);
  }, [fetchData]);

  // const videos = useMemo(() => sortVideos(items), [items]);

  return (
    <PageOfHome
      fetchStatus={fetchStatus}
      data={data}
    />
  );
};

export default Home;
