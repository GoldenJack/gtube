import { GET, SUCCESS, FAIL } from 'constants/common';
import { api } from 'store/api';

const LIKED = 'LIKED';

const initialState = {
  videosLiked: null,
  readyLiked: false,
  error: null
};

export default (likedStore = initialState, { type, data }) => {
  switch (type) {
    case GET + LIKED + SUCCESS:
      return { ...likedStore, videosLiked: data, readyLiked: true };
    case GET + LIKED + FAIL:
      return { ...likedStore, error: data, readyLiked: false };

    default:
      return likedStore;
  }
};

export const getLikedVideos = accessToken => async dispatch => {
  await api.videos.getLikedVideos(accessToken)
    .then(res => {
      const data = JSON.parse(res.text);
      dispatch({ type: GET + LIKED + SUCCESS, data });
    })
    .catch(res => {
      const err = res.error;
      dispatch({ type: GET + LIKED + FAIL, data: err });
    });
};
