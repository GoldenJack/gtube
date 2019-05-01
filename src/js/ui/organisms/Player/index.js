import React, { Component, useCallback, useEffect, useReducer, useMemo } from 'react';
import ReactDOM from 'react-dom';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Controls } from './Components/organisms/Controls';

const cn = bemHelper('watch');
const playerRoot = document.getElementById('watch');

const PLAY = 'PLAY';
const PAUSE = 'PAUSE';
const STOP = 'STOP';
const DURATION = 'DURATION';
const PROGRESS = 'PROGRESS';

const initialState = {
  play: false,
  pause: false,
  stop: true,
  duration: 0,
  progress: 0
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case PLAY:
      return { ...state, play: true, pause: false, stop: false };
    case PAUSE:
      return { ...state, play: false, pause: true, stop: false };
    case STOP:
      return { ...state, play: false, pause: false, stop: true };
    case DURATION:
      return { ...state, duration: payload.duration };
    case PROGRESS:
      return { ...state, progress: payload.progress };
    default:
      throw new Error();
  }
};

export const Player = ({ videoId, closePlayer, activePlayer }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const playing = useMemo(() => !!state.play, [state.play]);
  const { YT } = window;

  const initPlayer = () => {
    const duration = window.player.getDuration();
    dispatch({ type: DURATION, payload: { duration } });
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

  const onYouTubeIframeAPIReady = useCallback(id => {
    window.player = new YT.Player('player', {
      videoId: id,
      playerVars: {
        playsinline: 1,
        controls: 0
      },
      events: {
        onReady: initPlayer,
        onStateChange: statePlayerChange
      }
    });
  }, [YT]);

  const onPlayPlayer = () => {
    window.player.playVideo();
  };

  const onPausePlayer = () => {
    window.player.pauseVideo();
  };

  const onSetVolume = volume => {
    window.player.setVolume(volume);
  };

  const onSetProgress = time => {
    window.player.seekTo(time);
  };

  // const onSetSize = (width, height) => {
  //   window.player.setSize(width, height);
  // };

  // const onFullScreen = () => {
  //   const player = document.getElementById('player');
  //   if (!document.mozFullScreen && !document.webkitFullScreen) {
  //     if (player.mozRequestFullScreen) {
  //       player.mozRequestFullScreen();
  //     } else {
  //       player.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  //     }
  //   } else if (document.mozCancelFullScreen) {
  //     document.mozCancelFullScreen();
  //   } else {
  //     document.webkitCancelFullScreen();
  //   }
  // };

  const onProgressPlayer = useCallback(duration => {
    const timeNow = window.player.getCurrentTime();
    const percent = duration / 100;
    return timeNow / percent;
  }, []);

  useEffect(() => {
    YT && onYouTubeIframeAPIReady(videoId);
  }, [onYouTubeIframeAPIReady, YT, videoId]);

  useEffect(() => {
    if (state.play) {
      window.progressPlayer = setInterval(() => {
        const progressPlayer = onProgressPlayer(state.duration);
        dispatch({ type: PROGRESS, payload: { progress: progressPlayer } });
      }, 100);
    }

    if (state.pause || state.stop) clearInterval(window.progressPlayer);
  }, [state.play, state.pause, state.stop, state.duration, onProgressPlayer]);

  const markup = (
    <div {...cn()}>
      <div {...cn('overlay', { 'open': activePlayer })} role="none" onClick={closePlayer} />
      <div {...cn('player')}>
        <div id="player" />
        <Controls
          playing={playing}
          onPlayPlayer={onPlayPlayer}
          onPausePlayer={onPausePlayer}
          progress={state.progress}
        />
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    markup,
    playerRoot
  );
};

Player.propTypes = {
  mix: T.string,
  videoId: T.string.isRequired,
  closePlayer: T.func.isRequired,
  activePlayer: T.bool.isRequired
};

Player.defaultProps = {
  mix: ''
};
