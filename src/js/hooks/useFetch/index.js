import { useCallback, useReducer } from 'react';
import { PRISTINE, PENDING, COMPLETE, ERROR } from 'constants/fetchStatus';
import { FETCH, START, SUCCESS, FAIL } from 'constants/common';

const initialState = {
  data: [],
  fetchStatus: PRISTINE,
  error: []
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH + START:
      return { ...state, fetchStatus: PENDING };
    case FETCH + SUCCESS:
      return { data: payload.data, fetchStatus: COMPLETE };
    case FETCH + FAIL:
      return { ...state, error: payload.error, fetchStatus: ERROR };
    default:
      throw new Error();
  }
};

export const useFetch = (apiRequest) => {
  const [{ data, fetchStatus }, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(
    (...requestParams) => {
      dispatch({ type: FETCH + START });
      return apiRequest(...requestParams)
        .then(res => {
          dispatch({
            type: FETCH + SUCCESS,
            payload: { data: res }
          });
          return Promise.resolve(res);
        })
        .catch(err => {
          dispatch({ type: FETCH + FAIL, payload: { error: err.body } });
        });
    }, [apiRequest]);

  return [data, fetchStatus, fetchData];
};
