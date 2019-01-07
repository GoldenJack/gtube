import { SUCCESS, FAIL } from 'constants/common';
import { api } from 'store/api';
import { topic } from 'constants/topic';
import { getRandomTopic } from 'utils/helper';

const HOME = 'HOME';

const initialState = {
  home: null,
  readyHome: false,
  error: null
};

export default (home = initialState, { type, data }) => {
  switch (type) {
    case HOME + SUCCESS:
      return { ...home, home: data, readyHome: true };
    case HOME + FAIL:
      return { ...home, error: data };

    default:
      return home;
  }
};

export const getHomeData = () => async dispatch => {
  const randomTopic = getRandomTopic(topic);
  Promise.all(randomTopic.map(({ topicId, title }) => api.search.getTopic(topicId, title)))
    .then(response => {
      const data = response.map(({ res, titleTopic }) => {
        return {
          topic: JSON.parse(res.text),
          titleTopic
        };
      });
      dispatch({ type: HOME + SUCCESS, data });
    })
    .catch(response => {
      const err = response.error;
      dispatch({ type: HOME + SUCCESS, data: err });
    });
};
