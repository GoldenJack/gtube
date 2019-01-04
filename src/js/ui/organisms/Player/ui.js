import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Volume from 'atoms/Controls/Volume';
import Progress from 'atoms/Progress';
import ControlsPlay from 'atoms/Controls/ControlsPlay';

const cn = bemHelper('player');
const { YT } = window;

class Player extends Component {
  state = {
    play: false,
    pause: false,
    // stop: true,
    duration: 0
  };

  componentDidMount() {
    this.onYouTubeIframeAPIReady();
  }

  initPlayer = () => {
    this.setState({
      duration: this.player.getDuration()
    });
  }

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

  onPlayVideo = () => {
    this.player.playVideo();
  }

  onPauseVideo = () => {
    this.player.pauseVideo();
  }

  onSetVolume = volume => {
    this.player.setVolume(volume);
  }

  onGetProgress = () => {
    const { duration } = this.state;
    const timeNow = this.player.getCurrentTime();
    const procent = duration / 100;

    return timeNow / procent;
  }

  onSetProgress = (time) => {
    this.player.seekTo(time);
  }

  onYouTubeIframeAPIReady = () => {
    const { videoId } = this.props;
    this.player = new YT.Player('YTvideo', {
      videoId,
      playerVars: {
        playsinline: 1,
        controls: 0
      },
      events: {
        onReady: this.initPlayer,
        onStateChange: this.stateChange
      }
    });
  }

  render() {
    const { mix } = this.props;
    const { play, pause, duration } = this.state;

    return (
      <div {...cn('', '', mix)}>
        <div id="YTvideo" />
        <div {...cn('controls')}>
          <Progress
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
          <Volume setVolume={this.onSetVolume} />
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  mix: T.string,
  videoId: T.string.isRequired
};

Player.defaultProps = {
  mix: ''
};

export default Player;
