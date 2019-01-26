import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import WithPreloader from 'molecules/WithPreloader';
import Player from 'organisms/Player';

import Details from './ui/Details';

const cn = bemHelper('video');

class Video extends Component {
  wrapper = React.createRef();

  componentDidMount() {
    const { getVideo, videoId } = this.props;
    getVideo(videoId);
  }

  getVideoInfo = () => {
    const { video, readyVideo } = this.props;
    if (readyVideo) {
      const {
        snippet: {
          title,
          description,
          channelId,
          channelTitle
        },
        statistics: {
          viewCount,
          likeCount,
          dislikeCount,
          favoriteCount,
          commentCount
        } } = video.items[0];
      return {
        name: title,
        description,
        viewCount,
        likeCount,
        dislikeCount,
        favoriteCount,
        commentCount,
        channelId,
        channelTitle
      };
    }
    return false;
  }

  render() {
    const {
      videoId,
      readyVideo
    } = this.props;
    const { current } = this.wrapper;
    const videoInfo = this.getVideoInfo();
    return (
      <div {...cn()} ref={this.wrapper}>
        <WithPreloader readyContent={readyVideo}>
          <div {...cn('content')}>
            <div {...cn('player')}>
              {current && (
                <Player videoId={videoId} width={current.clientWidth} />
              )}
            </div>
            {videoInfo && (
              <Details
                mix={cn('details').className}
                videoInfo={videoInfo}
              />
            )}
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
