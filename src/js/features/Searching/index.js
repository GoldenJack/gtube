import React, { useContext, useMemo } from 'react';
import { SearchContext } from 'context';

import { PageOfSearching } from 'pages';
import { COMPLETE } from 'constants/fetchStatus';
import { getDataByVideo } from 'utils/helper';

export const Searching = () => {
  const { searchString, searchData, fetchStatus } = useContext(SearchContext);

  const videos = useMemo(() => {
    if (fetchStatus !== COMPLETE) return {};
    return getDataByVideo(searchData.items);
  }, [searchData, fetchStatus]);

  return (
    <PageOfSearching
      searchString={searchString}
      fetchStatus={fetchStatus}
      data={{ videos }}
    />
  );
};
