import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';

import WithPreloader from 'molecules/WithPreloader';
import Player from 'organisms/Player';

const cn = bemHelper('home');

class Video extends Component {
  componentDidMount() {
    const { getVideo, readyVideo, videoId } = this.props;
    !readyVideo && getVideo(videoId);
  }

  render() {
    const { videoId, readyVideo } = this.props;
    return (
      <div {...cn()}>
        <WithPreloader readyContent={readyVideo}>
          <Player videoId={videoId} />
        </WithPreloader>
      </div>
    );
  }
}

Video.propTypes = {
  videoId: T.string.isRequired,
  readyVideo: T.bool.isRequired,
  getVideo: T.func.isRequired
};

export default Video;
