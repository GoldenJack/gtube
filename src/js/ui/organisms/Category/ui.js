import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import VideoItem from 'molecules/VideoItem';

const cn = bemHelper('category');

const renderVideos = videos => {
  return videos.map(num => {
    return (
      <VideoItem key={num} mix={cn('video-item').className} />
    );
  });
};

const Category = ({ mix, title, description, videos }) => (
  <div {...cn('', '', mix)}>
    <h4 {...cn('title')}>{ title }</h4>
    {description && <h6 {...cn('description')}>{ description }</h6>}
    <div {...cn('content')}>
      {videos
        ? renderVideos(videos)
        : (
          <p>Video not found </p>
        )
      }
    </div>
  </div>
);

Category.propTypes = {
  mix: T.string,
  title: T.string.isRequired,
  videos: T.array.isRequired,
  description: T.string
};

Category.defaultProps = {
  mix: '',
  description: ''
};

export default Category;
