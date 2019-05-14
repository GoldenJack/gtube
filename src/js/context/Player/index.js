import React, { createContext, useEffect, useReducer } from 'react';
import T from 'prop-types';
import { UPDATE } from 'constants/common';

import { Watch } from 'organisms';

const OPENED = 'OPENED';
const CLOSED = 'CLOSED';
const MINIMIZE = 'MINIMIZE';
const VIDEO = 'VIDEO';

const initialState = {
  isOpen: false,
  videoId: null,
  isUpdated: false,
  minimize: false
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case OPENED:
      return { ...state, isOpen: true, videoId: payload.videoId };
    case CLOSED:
      return initialState;
    case UPDATE:
      return { ...state, isUpdated: true, videoId: payload.videoId };
    case MINIMIZE:
      return { ...state, minimize: payload.minimize };
    default:
      throw new Error();
  }
};

export const PlayerContext = createContext(initialState);
export const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openPlayer = videoId => {
    if (state.videoId === null) {
      return dispatch({ type: OPENED, payload: { videoId } });
    }
    return dispatch({ type: UPDATE, payload: { videoId } });
  };
  const closePlayer = () => dispatch({ type: CLOSED });
  const onMinimizePlayer = () => dispatch({
    type: MINIMIZE,
    payload: { minimize: !state.minimize }
  });

  return (
    <PlayerContext.Provider value={{ openPlayer }}>
      {children}
      {state.isOpen && (
        <Watch
          videoId={state.videoId}
          activePlayer={state.isOpen}
          closePlayer={closePlayer}
          onMinimizePlayer={onMinimizePlayer}
          minimize={state.minimize}
          isUpdated={state.isUpdated}
        />
      )}
    </PlayerContext.Provider>
  );
};

PlayerProvider.propTypes = {
  children: T.node.isRequired
};
