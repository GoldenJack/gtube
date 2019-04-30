import React, { createContext, useCallback, useEffect, useState, useReducer } from 'react';
import T from 'prop-types';
import { FETCH, START, SUCCESS, FAIL } from 'constants/common';
import { PRISTINE, PENDING, COMPLETE, ERROR } from 'constants/fetchStatus';
import { api } from 'src/api';

const SEARCH = 'SEARCH';

const initialState = {
  fetchStatus: PRISTINE,
  searchData: {},
  searchError: null
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH + SEARCH + START:
      return { ...state, fetchStatus: PENDING };
    case FETCH + SEARCH + SUCCESS:
      return { ...state, fetchStatus: COMPLETE, searchData: payload.searchData };
    case FETCH + SEARCH + FAIL:
      return { ...state, fetchStatus: ERROR, searchError: payload.error };
    default:
      throw new Error();
  }
};

export const SearchContext = createContext(initialState);
export const SearchProvider = ({ children }) => {
  const [searchString, setSearchString] = useState('');
  const [{
    fetchStatus,
    searchData,
    searchError
  }, dispatch] = useReducer(reducer, initialState);

  const onSearchChange = value => setSearchString(value);

  const fetchSearch = useCallback(query => {
    dispatch({ type: FETCH + SEARCH + START });
    return api.search.getList(query)
      .then(res => {
        dispatch({
          type: FETCH + SEARCH + SUCCESS,
          payload: { searchData: res },
        });
        return Promise.resolve(res);
      })
      .catch(err => {
        dispatch({ type: FETCH + SEARCH + FAIL, payload: { searchError: err.body } });
      });
  }, []);

  useEffect(() => {
    if (searchString !== '') {
      fetchSearch(searchString);
    }
  }, [searchString, fetchSearch]);

  return (
    <SearchContext.Provider value={{
      fetchStatus,
      searchData,
      searchError,
      searchString,
      onSearchChange
    }}
    >
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: T.node.isRequired
};
