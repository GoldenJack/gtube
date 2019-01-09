import React, { Component, Fragment } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import VideoItem from 'molecules/VideoItem';

const cn = bemHelper('slider');

class Slider extends Component {
  componentDidMount() {

  }

  _renderVideos = () => {
    const { videos } = this.props;
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

  render() {
    const { typeSlider, title, description } = this.props;

    return (
      <div {...cn('')} ref={this.slider}>
        <h4 {...cn('title')}>{ title }</h4>
        {description && <h6 {...cn('description')}>{ description }</h6>}

        <div {...cn('content')} ref={this.content}>
          {typeSlider === 'videos' && (
            this._renderVideos()
          )}
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  title: T.string,
  description: T.string,
  videos: T.array,
  typeSlider: T.oneOf([
    'videos'
  ]).isRequired
};

Slider.defaultProps = {
  title: '',
  description: '',
  videos: []
};

export default Slider;
