import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { VideoItem } from 'molecules';

const cn = bemHelper('category');

export const Category = ({ mix, videos }) => (
  <div {...cn('', '', mix)}>
    <div {...cn('content')}>
      {videos && videos.map(video => (
        <VideoItem key={video.videoId} {...video} />
      ))}
    </div>
  </div>
);

Category.propTypes = {
  mix: T.string,
  videos: T.array.isRequired,
  description: T.string,
  children: T.node
};

Category.defaultProps = {
  mix: '',
  description: '',
  children: null
};
