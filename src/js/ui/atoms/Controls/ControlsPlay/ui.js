import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon } from 'atoms';

const cn = bemHelper('controls-play');

class ControlsPlay extends Component {
  componentDidMount() {

  }

  render() {
    const { play, playVideo, pauseVideo } = this.props;
    return (
      <div {...cn()}>
        {!play ? (
          <div {...cn('wrap', 'played')}>
            <Icon icon="img/player/play.svg" effect={playVideo} />
          </div>
        ) : (
          <div {...cn('wrap', 'paused')}>
            <Icon icon="img/player/pause.svg" effect={pauseVideo} />
          </div>
        )}
      </div>
    );
  }
}

ControlsPlay.propTypes = {
  mix: T.string,
  play: T.bool.isRequired,
  playVideo: T.func.isRequired,
  pauseVideo: T.func.isRequired
};

ControlsPlay.defaultProps = {
  mix: ''
};

export default ControlsPlay;
