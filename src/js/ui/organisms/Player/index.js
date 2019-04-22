import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon } from 'atoms';
import Volume from './Components/Controls/Volume';
import Progress from './Components/Progress';
import ControlsPlay from './Components/Controls/ControlsPlay';
// import Link from 'react-router-dom';

const cn = bemHelper('player');

export class Player extends Component {
  state = {
    play: false,
    pause: false,
    // stop: true,
    duration: 0
  };

  componentDidMount() {
    window.YT && this.onYouTubeIframeAPIReady();
  }

  componentDidUpdate() {
    window.YT && !this.player && this.onYouTubeIframeAPIReady();
  }

  initPlayer = () => {
    this.setState({
      duration: this.player.getDuration()
    });
    this.onSetVolume(20);
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
  }

  onYouTubeIframeAPIReady = () => {
    const { videoId, width } = this.props;
    const height = (width / 100) * 56;
    this.player = new window.YT.Player('YTvideo', {
      videoId,
      width,
      height,
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

Player.propTypes = {
  mix: T.string,
  videoId: T.string.isRequired,
  width: T.number.isRequired
};

Player.defaultProps = {
  mix: ''
};
