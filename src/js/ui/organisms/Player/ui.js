import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Volume from 'atoms/Volume';
import Progress from 'atoms/Progress';

const cn = bemHelper('player');
const { YT } = window;

class Player extends Component {
  state = {
    play: false
  };

  componentDidMount() {
    this.onYouTubeIframeAPIReady();
  }

  onSetVolume = volume => {
    this.player.setVolume(volume);
  }

  onPlayVideo = () => {
    this.player.playVideo();
    this.setState({
      play: true
    });
  }

  onProgressBar = () => {
    const timeNow = this.player.getCurrentTime();
    const duration = this.player.getDuration();
    const procent = duration / 100;

    return timeNow / procent;
  }

  onYouTubeIframeAPIReady = () => {
    const { videoId } = this.props;
    this.player = new YT.Player('player', {
      videoId,
      events: {
        onReady: this.getProgressBar
      }
    });
  }

  render() {
    const { mix } = this.props;
    const { play } = this.state;

    return (
      <div {...cn('', '', mix)}>
        <div id="player" />
        <div {...cn('controls')}>
          <Progress play={play} calcProgress={this.onProgressBar} />
          <Volume setVolume={this.onSetVolume} />
          <div role="none" onClick={this.onPlayVideo}>Play</div>
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
