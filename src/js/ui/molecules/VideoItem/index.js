import React, { Component } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { getCountView } from 'utils/helper';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Preview, Views } from 'atoms';

const cn = bemHelper('video-item');

export class VideoItem extends Component {
  componentDidMount() {

  }

  render() {
    const {
      mix,
      shape,
      video: {
        id,
        snippet: {
          title,
          thumbnails,
          channelId,
          channelTitle
        },
        statistics: statistics = false
      }
    } = this.props;
    const { viewCount = false } = statistics;
    const views = getCountView(viewCount);

    const previewImage = thumbnails.medium.url;

    return (
      <div {...cn('', shape, mix)}>
        <div {...cn('wrap')}>
          <Preview mix={cn('preview').className} image={previewImage} />
          <div {...cn('description')}>
            <Link
              to={`/watch/${id}`}
              mix={cn('video-link').className}
              text={title}
            />
            <Link
              to={`channel/${channelId}/home`}
              mix={cn('author-link').className}
              text={channelTitle}
            />
            <div {...cn('description-wrap')}>
              {statistics && (
                <Views viewCount={views} mix={cn('views').className} />
              )}
              {/* <p {...cn('date-published')}>2 days ago</p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

VideoItem.propTypes = {
  mix: T.string,
  video: T.object.isRequired,
  shape: T.oneOf([
    'full',
    'standard',
    'slider'
  ]),

  viewCount: T.number
};

VideoItem.defaultProps = {
  viewCount: false
};

VideoItem.defaultProps = {
  mix: '',
  shape: 'standard'
};

