import { useEffect, useState } from 'react';
import { PENDING, CALM } from 'constants/httpStatusCode';

export const useFetch = (apiRequest) => {
  const [data, setData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(CALM);

  const fetchData = () => {
    setFetchStatus(PENDING);
    apiRequest()
      .then(result => {
        setData(result.body);
        setFetchStatus(result.statusCode);
      });
  };

  useEffect(fetchData, []);

  return {
    data,
    fetchStatus
  };
};
