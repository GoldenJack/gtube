import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import VideoItem from 'molecules/VideoItem';

const cn = bemHelper('category');

const _renderVideos = (videos, withoutStat) => {
  return videos.map(video => {
    console.log(video.id.videoId)
    const videoId = typeof video.id === 'object' ? video.id.videoId : video.id;

    return (
      <VideoItem
        mix={cn('video-item').className}
        key={videoId}
        video={video}
        withoutStat={withoutStat}
      />
    );
  });
};

const Category = ({ mix, title, description, videos, withoutStat }) => (
  <div {...cn('', '', mix)}>
    <h4 {...cn('title')}>{ title }</h4>
    {description && <h6 {...cn('description')}>{ description }</h6>}
    <div {...cn('content')}>
      {videos.length > 0
        ? _renderVideos(videos, withoutStat)
        : (
          <p {...cn('not-found')}>Video not found </p>
        )
      }
    </div>
  </div>
);

Category.propTypes = {
  mix: T.string,
  title: T.string.isRequired,
  videos: T.array,
  description: T.string,
  withoutStat: T.bool
};

Category.defaultProps = {
  mix: '',
  description: '',
  videos: [],
  withoutStat: false
};

export default Category;
