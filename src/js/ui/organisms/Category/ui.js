import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import VideoItem from 'molecules/VideoItem';

const cn = bemHelper('category');

const _renderVideos = videos => {
  return videos.map(video => {
    return (
      <VideoItem key={video.id} video={video} mix={cn('video-item').className} />
    );
  });
};

const Category = ({ mix, title, description, videos }) => (
  <div {...cn('', '', mix)}>
    <h4 {...cn('title')}>{ title }</h4>
    {description && <h6 {...cn('description')}>{ description }</h6>}
    <div {...cn('content')}>
      {videos.length > 0
        ? _renderVideos(videos)
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
  description: T.string
};

Category.defaultProps = {
  mix: '',
  description: '',
  videos: []
};

export default Category;
