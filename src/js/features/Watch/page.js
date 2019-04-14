import React, { useEffect, useRef } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import WithPreloader from 'molecules/WithPreloader';
import Player from 'organisms/Player';

import Details from './ui/Details';

const cn = bemHelper('video');

const Watch = ({
  getVideo,
  readyVideo,
  video,
  match: { params: { videoId } }
}) => {
  const wrapper = useRef(null);

  useEffect(() => { getVideo(videoId); }, []);

  const getVideoInfo = () => {
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
  };

  const { current } = wrapper;
  const videoInfo = getVideoInfo();
  return (
    <div {...cn()} ref={wrapper}>
      <WithPreloader ready={readyVideo && 200}>
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
};

Watch.propTypes = {
  video: T.any,
  videoId: T.string.isRequired,
  readyVideo: T.bool.isRequired,
  getVideo: T.func.isRequired
};

Watch.defaultProps = {
  video: false
};

export default Watch;
