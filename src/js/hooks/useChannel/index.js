import { useEffect, useState } from 'react';
import { PENDING, CALM } from 'constants/httpStatusCode';

export const useChannel = (apiRequest) => {
  const [channelData, setChannelData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(CALM);

  const fetchChannelData = () => {
    setFetchStatus(PENDING);
    apiRequest()
      .then(result => {
        setChannelData(result.body);
        setFetchStatus(result.statusCode);
      });
  };

  useEffect(fetchChannelData, []);

  return {
    channelData,
    fetchStatus
  };
};
