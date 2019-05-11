import React, { createContext, useEffect, useReducer } from 'react';
import T from 'prop-types';
import { UPDATE } from 'constants/common';

import { Player } from 'organisms';

const OPENED = 'OPENED';
const CLOSED = 'CLOSED';
const VIDEO = 'VIDEO';

const initialState = {
  isOpen: false,
  videoId: null,
  isUpdated: false
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case OPENED:
      return { ...state, isOpen: true, videoId: payload.videoId };
    case CLOSED:
      return { ...state, isUpdated: false, isOpen: false, videoId: null };
    case UPDATE:
      return { ...state, isUpdated: true, videoId: payload.videoId };
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

  return (
    <PlayerContext.Provider value={{ openPlayer }}>
      {children}
      {state.isOpen && (
        <Player
          videoId={state.videoId}
          activePlayer={state.isOpen}
          closePlayer={closePlayer}
          isUpdated={state.isUpdated}
        />
      )}
    </PlayerContext.Provider>
  );
};

PlayerProvider.propTypes = {
  children: T.node.isRequired
};
