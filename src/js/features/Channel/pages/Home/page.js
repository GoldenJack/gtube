import React, { useEffect } from 'react';
import T from 'prop-types';
import { useFetch } from 'hooks/useFetch';
import { api } from 'store/api';

import WithPreloader from 'molecules/WithPreloader';

const propTypes = {
  match: T.object.isRequired
};

const HomeChannel = ({
  match: { params: { channelId } }
}) => {
  const fetchData = useFetch(() => api.channels.getItem(channelId));

  return (
    <div>
      <WithPreloader ready={fetchData.fetchStatus}>
        123
      </WithPreloader>
    </div>
  );
};

HomeChannel.propTypes = propTypes;

export default HomeChannel;
