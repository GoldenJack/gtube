import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import WithPreloader from 'molecules/WithPreloader';
import Player from 'organisms/Player';

const cn = bemHelper('video');

class Video extends Component {
  wrapper = React.createRef();

  componentDidMount() {
    const { getVideo, videoId } = this.props;
    getVideo(videoId);
  }

  _renderVideoInfo = () => {
    const { video } = this.props;
    if (video !== null) {
      const { snippet: { title } } = video.items[0];
      return (
        <div {...cn('info')}>
          <h4 {...cn('title')}>{title}</h4>
        </div>
      );
    } else {
      return (
        <p>Информация загружается</p>
      );
    }
  }

  render() {
    const {
      videoId,
      readyVideo
    } = this.props;
    const { current } = this.wrapper;

    return (
      <div {...cn()} ref={this.wrapper}>
        <WithPreloader readyContent={readyVideo}>
          <div {...cn('content')}>
            <div {...cn('player')}>
              {current && (
                <Player videoId={videoId} width={current.clientWidth} />
              )}
            </div>
            {this._renderVideoInfo()}
          </div>
        </WithPreloader>
      </div>
    );
  }
}

Video.propTypes = {
  video: T.any,
  videoId: T.string.isRequired,
  readyVideo: T.bool.isRequired,
  getVideo: T.func.isRequired
};

Video.defaultProps = {
  video: false
};

export default Video;
