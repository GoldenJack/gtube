import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('player');
const { YT } = window;

class Player extends Component {
  state = {
    player: null
  }

  componentDidMount() {
    this.onYouTubeIframeAPIReady();
  }

  onYouTubeIframeAPIReady = () => {
    const { videoId } = this.props;
    const player = new YT.Player('player', {
      videoId,
      // events: {
      //   'onReady': onPlayerReady,
      //   'onStateChange': onPlayerStateChange
      // }
    });
    this.setState({
      player
    });
  }

  render() {
    const { mix } = this.props;
    return (
      <div {...cn('', '', mix)}>
        <div id="player" />
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
