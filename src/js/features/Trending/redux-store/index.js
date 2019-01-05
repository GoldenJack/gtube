import { GET, SUCCESS, FAIL } from 'constants/common';
import { api } from 'store/api';

const TRENDING = 'TRENDING';

const initialState = {
  trending: {},
  readyTrending: false,
  error: null
};

export default (trending = initialState, { type, data }) => {
  switch (type) {
    case GET + TRENDING + SUCCESS:
      return { ...trending, trending: data, readyTrending: true };
    case GET + TRENDING + FAIL:
      return { ...trending, error: data };

    default:
      return trending;
  }
};

export const getTrendingVideos = () => async dispatch => {
  await api.videos.getTrendingVideos()
    .then(res => {
      const data = JSON.parse(res.text);
      dispatch({ type: GET + TRENDING + SUCCESS, data });
    })
    .catch(res => {
      const err = res.error;
      dispatch({ type: GET + TRENDING + FAIL, data: err, readyTrending: false });
    });
};
