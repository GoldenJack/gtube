import { GET, SUCCESS, FAIL } from 'constants/common';
import { api } from 'store/api';

const CATEGORIES = 'CATEGORIES';

const initialState = {
  categories: {},
  readyCategory: false,
  error: null
};

export default (home = initialState, { type, data }) => {
  switch (type) {
    case GET + CATEGORIES + SUCCESS:
      return { ...home, categories: data, readyCategory: true };
    case GET + CATEGORIES + FAIL:
      return { ...home, error: data };

    default:
      return home;
  }
};

export const getVideoGategories = () => async dispatch => {
  await api.channels.getItem()
    .then(res => {
      const data = JSON.parse(res.text);
      dispatch({ type: GET + CATEGORIES + SUCCESS, data });
    })
    .catch(res => {
      const err = res.error;
      dispatch({ type: GET + CATEGORIES + SUCCESS, data: err, readyCategory: false });
    });
};
