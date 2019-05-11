import React, { useCallback, useEffect, useReducer, useMemo } from 'react';
import ReactDOM from 'react-dom';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Controls } from 'organisms/Player/Components/organisms/Controls';
import { Panel } from 'organisms/Player/Components/organisms/Panel';

const cn = bemHelper('watch');
const playerRoot = document.getElementById('watch');

const INIT = 'INIT';
const PLAY = 'PLAY';
const PAUSE = 'PAUSE';
const STOP = 'STOP';
const DESTROY = 'DESTROY';
const MINIMIZE = 'MINIMIZE';

const initialState = {
  play: false,
  pause: false,
  stop: true,
  duration: 0,
  volume: 0,
  minimize: false
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
    case MINIMIZE:
      return { ...state, minimize: payload.minimize };
    case DESTROY:
      return initialState;
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

  const onMinimizePlayer = minimize => {
    dispatch({ type: MINIMIZE, payload: { minimize } });
    minimize ? onSetSize(320, 180) : onSetSize(640, 360);
  };

  const onClosePlayer = () => {
    dispatch({ type: DESTROY });
    closePlayer();
  };

  useEffect(() => {
    YT && onYouTubeIframeAPIReady(videoId);
  }, [onYouTubeIframeAPIReady, YT, videoId]);

  const markup = (
    <div {...cn('', { 'minimize': state.minimize })}>
      <div {...cn('overlay', { 'open': activePlayer })} role="none" onClick={onClosePlayer} />
      <div {...cn('player')}>
        <Panel
          minimize={state.minimize}
          onClose={onClosePlayer}
          onMinimizePlayer={onMinimizePlayer}
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
