import React, { useCallback, useEffect, useReducer, useMemo, useState } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Controls } from 'organisms/Player/Components/organisms/Controls';
import { Panel } from 'organisms/Player/Components/organisms/Panel';

const cn = bemHelper('player');

const INIT = 'INIT';
const PLAY = 'PLAY';
const PAUSE = 'PAUSE';
const STOP = 'STOP';
const DESTROY = 'DESTROY';

const initialState = {
  play: false,
  pause: false,
  stop: true,
  duration: 0,
  volume: 0
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case INIT:
      return { ...state, ...payload };
    case PLAY:
      return { ...state, play: true, pause: false, stop: false };
    case PAUSE:
      return { ...state, play: false, pause: true, stop: false };
    case STOP:
      return { ...state, play: false, pause: false, stop: true };
    case DESTROY:
      return initialState;
    default:
      throw new Error();
  }
};

export const Player = ({
  mix,
  videoId,
  closePlayer,
  activePlayer,
  isUpdated,
  minimize,
  onMinimizePlayer
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const playing = useMemo(() => !!state.play, [state.play]);
  const { YT } = window;

  const initPlayer = () => {
    const duration = window.player.getDuration();
    window.player.setVolume(state.volume);
    dispatch({ type: INIT, payload: { duration } });
  };

  const statePlayerChange = statePlayer => {
    const { data } = statePlayer;
    switch (data) {
      case 0: return dispatch({ type: STOP });
      case 1: return dispatch({ type: PLAY });
      case 2: return dispatch({ type: PAUSE });
      default: return false;
    }
  };

  const apiChange = api => {
    console.log(api.target)
  };

  const onYouTubeIframeAPIReady = useCallback(id => {
    window.player = new YT.Player('player', {
      videoId: id,
      playerVars: {
        playsinline: 1,
        controls: 0
      },
      events: {
        onReady: initPlayer,
        onStateChange: statePlayerChange,
        onApiChange: apiChange
      }
    });
  }, [YT]);

  const onPlayPlayer = () => window.player.playVideo();
  const onPausePlayer = () => window.player.pauseVideo();
  const onSetVolume = volume => window.player.setVolume(volume);
  const onGetProgress = () => window.player.getCurrentTime();
  const onSetProgress = time => window.player.seekTo(time);
  const onSetSize = (width, height) => window.player.setSize(width, height);

  const onFullScreen = () => {
    const player = document.getElementById('player');
    if (!document.mozFullScreen && !document.webkitFullScreen) {
      if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      } else {
        player.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else {
      document.webkitCancelFullScreen();
    }
  };

  const onMinimize = () => {
    onMinimizePlayer();
    !minimize ? onSetSize(320, 180) : onSetSize(640, 360);
  };

  const onClosePlayer = () => {
    dispatch({ type: DESTROY });
    closePlayer();
  };

  useEffect(() => {
    if (YT) {
      isUpdated
        ? window.player.loadVideoById(videoId)
        : onYouTubeIframeAPIReady(videoId);
    }
  }, [onYouTubeIframeAPIReady, YT, videoId, isUpdated]);

  return (
    <div {...cn('', '', mix)}>
      <Panel
        minimize={minimize}
        onClose={onClosePlayer}
        onMinimizePlayer={onMinimize}
      />
      <div id="player" />
      <Controls
        playing={playing}
        onPlayPlayer={onPlayPlayer}
        onPausePlayer={onPausePlayer}
        duration={state.duration}
        onGetProgress={onGetProgress}
        onSetProgress={onSetProgress}
        onFullScreen={onFullScreen}
        volume={state.volume}
        onSetVolume={onSetVolume}
      />
    </div>
  );
};

Player.propTypes = {
  mix: T.string,
  videoId: T.string.isRequired,
  closePlayer: T.func.isRequired,
  activePlayer: T.bool.isRequired,
  isUpdated: T.bool.isRequired,
  minimize: T.bool
};

Player.defaultProps = {
  mix: '',
  minimize: false
};
