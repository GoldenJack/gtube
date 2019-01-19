import { GET, START, SUCCESS, FAIL } from 'constants/common';
import { api } from 'store/api';

const CHANNEL = 'CHANNEL';

const initialState = {
  channel: {},
  fetchStatus: false,
  error: false
};

export default (channel = initialState, { type, data }) => {
  switch (type) {
    case GET + CHANNEL + START:
      return { ...initialState };
    case GET + CHANNEL + SUCCESS:
      return { ...channel, fetchStatus: true, channel: data };
    case GET + CHANNEL + FAIL:
      return { ...channel, fetchStatus: false, error: data };
    default: return { ...channel };
  }
};

export const getChannel = channelId => async dispatch => {
  try {
    dispatch({ type: GET + CHANNEL + START })
    const res = await api.channels.getItem(channelId);
    dispatch({ type: GET + CHANNEL + SUCCESS, data: res });
  } catch (err) {
    console.log(err)
  }
}
