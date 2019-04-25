/**
 * Global context
 * Here save data for all App
 */

import React, { createContext, useCallback, useEffect, useState, useReducer } from 'react';
import T from 'prop-types';
import { parseJwt } from 'utils/parseJwt';
import { setAccessToken, getAccessToken } from 'services/LocalStorage';
import { FETCH, START, SUCCESS, FAIL } from 'constants/common';
import { PRISTINE, PENDING, COMPLETE, ERROR } from 'constants/fetchStatus';
import { API_INIT } from 'config';

const LOGIN = 'LOGIN';

const initialState = {
  fetchStatus: PRISTINE,
  accessToken: null,
  userInfo: {},
  errorByAuth: {}
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH + LOGIN + START:
      return { ...state, fetchStatus: payload.fetchStatus };
    case FETCH + LOGIN + SUCCESS: {
      const { accessToken, userInfo } = payload;
      return {
        ...state,
        accessToken,
        userInfo
      };
    }
    case FETCH + LOGIN + FAIL:
      return { ...state, errorByAuth: payload.error };
    default:
      throw new Error();
  }
};

export const AuthContext = createContext(initialState);
export const AuthProvider = ({ children }) => {
  const [googleApi, setGoogleApi] = useState(null);
  const [{
    fetchStatus,
    accessToken,
    userInfo,
    errorByAuth
  }, dispatch] = useReducer(reducer, initialState);

  const _loadApi = useCallback(async () => {
    if (window.gapi) {
      window.gapi.load('auth2', () => {
        window.gapi.auth2
          .init(API_INIT)
          .then(init => setGoogleApi(init))
          .catch(err => console.log(err));
      });
    }
  }, []);

  const authIn = () => {
    dispatch({ type: FETCH + LOGIN + START, fetchStatus: PENDING });
    googleApi.signIn()
      .then(googleUser => {
        const tokenGoogle = googleUser.getAuthResponse().id_token;
        const googleAccessToken = googleUser.getAuthResponse().access_token;
        const profile = googleUser.getBasicProfile();
        const googleUserInfo = {
          id: parseJwt(tokenGoogle).id,
          avatar: profile.getImageUrl(),
          email: profile.getEmail(),
          familyName: profile.getFamilyName(),
          firstName: profile.getGivenName(),
          fullName: profile.getName(),
        };
        dispatch({
          type: FETCH + LOGIN + SUCCESS,
          payload: {
            accessToken: googleAccessToken,
            userInfo: googleUserInfo,
            fetchStatus: COMPLETE
          }
        });
        setAccessToken(googleAccessToken);
      })
      .catch(error => {
        dispatch({
          type: FETCH + LOGIN + FAIL,
          payload: { error, fetchStatus: ERROR }
        });
      });
  };

  useEffect(() => {
    googleApi === null && _loadApi();
  }, [googleApi, _loadApi]);

  return (
    <AuthContext.Provider value={{
      fetchStatus,
      accessToken,
      userInfo,
      errorByAuth,
      authIn
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: T.node.isRequired
};
