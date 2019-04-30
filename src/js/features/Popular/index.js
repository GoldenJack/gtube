import React, { useMemo } from 'react';
import { useFetch } from 'hooks';
import { getDataByVideo } from 'utils/helper';
import { api } from 'src/api';
import { COMPLETE } from 'constants/fetchStatus';

import { PageOfPopular } from 'pages';

export const Popular = () => {
  const { data, fetchStatus } = useFetch(api.videos.getTrendingVideos);

  const videos = useMemo(() => {
    if (fetchStatus !== COMPLETE) return {};
    return getDataByVideo(data.items);
  }, [data, fetchStatus]);

  return (
    <PageOfPopular data={{ videos }} fetchStatus={fetchStatus} />
  );
};
