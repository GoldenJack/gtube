import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import VideoItem from 'molecules/VideoItem';

const cn = bemHelper('category');

const _renderVideos = (videos) => {
  return videos.map(video => {
    return (
      <VideoItem
        mix={cn('video-item').className}
        key={video.id}
        video={video}
      />
    );
  });
};

const Category = ({ mix, videos }) => (
  <div {...cn('', '', mix)}>
    <div {...cn('content')}>
      {videos && _renderVideos(videos)}
    </div>
  </div>
);

Category.propTypes = {
  mix: T.string,
  title: T.string.isRequired,
  videos: T.array.isRequired,
  description: T.string,
  children: T.any
};

Category.defaultProps = {
  mix: '',
  description: '',
  children: false
};

export default Category;
