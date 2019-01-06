import { GET, SUCCESS, FAIL, START } from 'constants/common';
import { api } from 'store/api';

const SEARCH = 'SEARCH';
const CHANGE = 'CHANGE';

const initialState = {
  searchQuery: '',
  searchReady: false,
  searchResult: null,
  error: null
};

export default (searchStore = initialState, { type, data }) => {
  switch (type) {
    case CHANGE + SEARCH + SUCCESS:
      return { ...searchStore, searchQuery: data };

    case GET + SEARCH + START:
      return { ...searchStore, searchReady: false };

    case GET + SEARCH + SUCCESS:
      return { ...searchStore, searchResult: data, searchReady: true };

    case GET + SEARCH + FAIL: {
      return { ...searchStore, error: data, searchReady: true };
    }

    default:
      return searchStore;
  }
};

export const changeSearch = searchQuery => dispatch => {
  dispatch({ type: GET + SEARCH + START });
  dispatch({ type: CHANGE + SEARCH + SUCCESS, data: searchQuery });
};

export const getSearch = searchQuery => (dispatch) => {
  api.search.getList(searchQuery)
    .then(res => {
      const data = JSON.parse(res.text);
      dispatch({ type: GET + SEARCH + SUCCESS, data });
    })
    .catch(res => {
      const data = res.error;
      dispatch({ type: GET + SEARCH + FAIL, data });
    });
};
