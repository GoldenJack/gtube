import { GET, SUCCESS, FAIL } from 'constants/common';
import { api } from 'store/api';

const SUBSCRIPTIONS = 'SUBSCRIPTIONS';

const initialState = {
  subscriptions: null,
  readySub: false,
  error: null
};

export default (subStore = initialState, { type, data }) => {
  switch (type) {
    case GET + SUBSCRIPTIONS + SUCCESS:
      return { ...subStore, subscriptions: data, readySub: true };
    case GET + SUBSCRIPTIONS + FAIL:
      return { ...subStore };

    default:
      return subStore;
  }
};

export const getSubscriptions = (accessToken, channelId) => async dispatch => {
  await api.subscriptions.getUserSubscriptions(accessToken, channelId)
    .then(res => {
      const data = JSON.parse(res.text);
      dispatch({ type: GET + SUBSCRIPTIONS + SUCCESS, data });
    })
    .catch(res => {
      const err = res.error;
      dispatch({ type: GET + SUBSCRIPTIONS + FAIL, data: err });
    });
};
