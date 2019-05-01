import React, { Component, useCallback, useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon, Button } from 'atoms';
import Volume from './Components/Controls/Volume';
import { Progress } from './Components/Progress';
import ControlsPlay from './Components/Controls/ControlsPlay';

const cnWatch = bemHelper('watch');
const cnPlayer = bemHelper('player');
const playerRoot = document.getElementById('watch');

const PLAY = 'PLAY';
const PAUSE = 'PAUSE';
const STOP = 'STOP';
const DURATION = 'DURATION';
const PROGRESS = 'PROGRESS';

const initialState = {
  play: false,
  pause: false,
  // stop: true,
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

export const Player = ({ videoId }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { YT } = window;

  const initPlayer = () => {
    const aaa = window.player.getDuration();
    dispatch({ type: DURATION, payload: { duration: aaa } });
  };

  const statePlayerChange = statePlayer => {
    const { data } = statePlayer;
    console.log(data)
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

  const onPlayVideo = () => {
    window.player.playVideo();
  };

  const onGetProgressNow = useCallback(duration => {
    const timeNow = window.player.getCurrentTime();
    console.log(timeNow)
    const percent = duration / 100;
    return timeNow / percent;
  }, []);

  useEffect(() => {
    YT && onYouTubeIframeAPIReady(videoId);
  }, [onYouTubeIframeAPIReady, YT, videoId]);

  useEffect(() => {
    if (state.play) {
      window.progressPlayer = setInterval(() => {
        const progressNow = onGetProgressNow(state.duration);
        dispatch({ type: PROGRESS, payload: { progress: progressNow } });
      }, 100);
    }

    if (state.pause || state.stop) clearInterval(window.progressPlayer);
  }, [state.play, state.pause, state.stop, state.duration, onGetProgressNow]);

  const pl = (
    <div {...cnWatch()}>
      <div {...cnPlayer()}>
        <div id="player" />
        <div {...cnPlayer('controls')}>
          <Button mix={cnPlayer('play').className} onClick={onPlayVideo}>
            <Icon icon="play" size="medium" />
          </Button>
          <Progress
            mix={cnPlayer('progress').className}
            onChooseTime={(e) => {console.log(e)}}
            progress={state.progress}
            type="full"
          />
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    pl,
    playerRoot
  );
};

export class Player2 extends Component {
  state = {
    play: false,
    pause: false,
    // stop: true,
    duration: 0
  };

  initPlayer = () => {
    this.setState({
      duration: this.player.getDuration()
    });
    this.onSetVolume(20);
  };

  stateChange = infoChange => {
    const { data } = infoChange;
    switch (data) {
      // case -1: {
      //   return this.setState({
      //     stop: true
      //   });
      // }
      case 1: {
        return this.setState({
          play: true,
          pause: false
        });
      }
      case 2: {
        return this.setState({
          play: false,
          pause: true
        });
      }
      default: return false;
    }
  }

  onPauseVideo = () => {
    this.player.pauseVideo();
  }

  onSetVolume = volume => {
    this.player.setVolume(volume);
  }

  onSetProgress = (time) => {
    this.player.seekTo(time);
  }

  onSetSize = (width, height) => {
    this.player.setSize(width, height);
  }

  onFullScreen = () => {
    const player = document.getElementById('YTvideo');
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

  render() {
    const { mix } = this.props;
    const { play, pause, duration } = this.state;

    return (
      <div {...cn('', '', mix)}>
        <div id="YTvideo" />
        <div {...cn('controls')}>
          <Progress
            mix={cn('progress').className}
            play={play}
            pause={pause}
            duration={duration}
            getProgress={this.onGetProgress}
            setProgress={this.onSetProgress}
          />
          <ControlsPlay
            play={play}
            playVideo={this.onPlayVideo}
            pauseVideo={this.onPauseVideo}
          />
          {/* <div {...cn('video-data')}>
            <Link to
          </div> */}
          <Volume setVolume={this.onSetVolume} />
          <Icon
            icon="img/player/full.svg"
            mix={cn('icon-full').className}
            effect={this.onFullScreen}
          />
        </div>
      </div>
    );
  }
}

// Player.propTypes = {
//   mix: T.string,
//   videoId: T.string.isRequired,
//   width: T.number.isRequired
// };
//
// Player.defaultProps = {
//   mix: ''
// };
