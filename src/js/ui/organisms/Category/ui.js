import React, { Fragment } from 'react';
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

const _renderContent = (videos, children) => {
  if (children) {
    return (
      <Fragment>
        { children }
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {videos.length > 0
          ? _renderVideos(videos)
          : (
            <p {...cn('not-found')}>Video not found </p>
          )
        }
      </Fragment>
    );
  }
};

const Category = ({ mix, title, description, videos, children }) => (
  <div {...cn('', '', mix)}>
    <h4 {...cn('title')}>{ title }</h4>
    {description && <h6 {...cn('description')}>{ description }</h6>}
    <div {...cn('content')}>
      { _renderContent(videos, children) }
    </div>
  </div>
);

Category.propTypes = {
  mix: T.string,
  title: T.string.isRequired,
  videos: T.array,
  description: T.string,
  withoutStat: T.bool,
  children: T.any
};

Category.defaultProps = {
  mix: '',
  description: '',
  videos: [],
  withoutStat: false,
  children: false
};

export default Category;
