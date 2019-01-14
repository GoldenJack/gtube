import { SUCCESS, FAIL } from 'constants/common';
import { parseJwt } from 'utils/parseJwt';
import { API_INIT } from 'config';
import { api } from 'store/api';

const SIGNIN = 'SIGNIN';
const LOGOUT = 'LOGOUT';
const INIT = 'INIT';

const initialState = {
  googleApi: null,
  googleApiError: null,
  accessToken: null,
  userInfo: {},
  authError: null,
  readyAuth: false
};

export default (authorization = initialState, { type, data }) => {
  switch (type) {
    case INIT + SUCCESS:
      return { ...authorization, googleApi: data };
    case INIT + FAIL:
      return { ...authorization, googleApiError: data };

    case SIGNIN + SUCCESS: {
      const { userInfo, accessToken } = data;
      return {
        ...authorization, userInfo, accessToken, readyAuth: true
      };
    }
    case SIGNIN + FAIL: {
      return {
        ...authorization, authError: data
      };
    }

    case LOGOUT + SUCCESS: {
      return { ...authorization, accessToken: null, userInfo: null, readyAuth: false };
    }
    default:
      return authorization;
  }
};

export const initGoogleApi = () => dispatch => {
  const accessToken = localStorage.getItem('accessToken');
  const userInfo = localStorage.getItem('userInfo');
  const _loadApi = async () => {
    if (window.gapi) {
      window.gapi.load('auth2', () => {
        window.gapi.auth2
          .init(API_INIT)
          .then(init => {
            dispatch({ type: INIT + SUCCESS, data: init });
          })
          .catch(err => {
            dispatch({ type: INIT + FAIL, data: err });
          });
      });
    } else { setTimeout(() => { _loadApi(); }, 100); }
  };
  if (accessToken && userInfo) {
    _loadApi();
    dispatch(
      {
        type: SIGNIN + SUCCESS,
        data: {
          userInfo: JSON.parse(userInfo),
          accessToken
        }
      }
    );
  } else {
    _loadApi();
  }
};

export const signIn = () => (dispatch, getState) => {
  const { Auth: { googleApi } } = getState();
  googleApi.signIn()
    .then(googleUser => {
      const tokenGoogle = googleUser.getAuthResponse().id_token;
      const accessToken = googleUser.getAuthResponse().access_token;
      const profile = googleUser.getBasicProfile();
      api.channels.getUserChannel(accessToken)
        .then(res => {
          const data = JSON.parse(res.text);
          const {
            id,
            contentDetails: {
              relatedPlaylists
            }
          } = data.items[0];
          const userInfo = {
            id: parseJwt(tokenGoogle).id,
            channelId: id,
            relatedPlaylists,
            avatar: profile.getImageUrl(),
            email: profile.getEmail(),
            familyName: profile.getFamilyName(),
            firstName: profile.getGivenName(),
            fullName: profile.getName(),
          };

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('userInfo', JSON.stringify(userInfo));

          dispatch({ type: SIGNIN + SUCCESS, data: { userInfo, accessToken } });
        })
        .catch(res => {
          const err = JSON.parse(res.error);
          dispatch({ type: SIGNIN + FAIL, data: err });
        });
    })
    .catch(err => {
      dispatch({ type: SIGNIN + FAIL, data: err });
    });
};

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch({ type: LOGOUT + SUCCESS });
};
