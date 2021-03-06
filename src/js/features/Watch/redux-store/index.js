import { GET, SUCCESS, FAIL, START } from 'constants/common';
import { api } from 'store/api';

const VIDEO = 'VIDEO';

const initialState = {
  video: {},
  readyVideo: false,
  error: null
};

export default (videoStore = initialState, { type, data }) => {
  switch (type) {
    case GET + VIDEO + START:
      return { ...initialState };
    case GET + VIDEO + SUCCESS:
      return { ...videoStore, video: data, readyVideo: true };
    case GET + VIDEO + FAIL:
      return { ...videoStore, error: data };

    default:
      return videoStore;
  }
};

export const getVideo = videoId => async dispatch => {
  dispatch({ type: GET + VIDEO + START });
  await api.videos.getVideo(videoId)
    .then(res => {
      const data = JSON.parse(res.text);
      dispatch({ type: GET + VIDEO + SUCCESS, data });
    })
    .catch(res => {
      const err = res.error;
      dispatch({ type: GET + VIDEO + FAIL, data: err, readyVideo: false });
    });
};
