import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Preview from 'atoms/Preview';
import Link from 'atoms/Link';
import Views from 'atoms/Views';

const cn = bemHelper('video-item');

class VideoItem extends Component {
  componentDidMount() {

  }

  // calcDate = () => {
  //   const { video: { snippet: { publishedAt } } } = this.props;
  //   const dateNow = new Date();

  //   console.log(publishedAt)
  // }

  render() {
    const {
      mix,
      type,
      video: {
        id,
        snippet: {
          title,
          thumbnails,
          channelTitle
        },
        statistics: {
          viewCount
        }
      }
    } = this.props;

    const previewImage = thumbnails.medium.url;
    // const datePublished = this.calcDate();

    return (
      <div {...cn('', '', mix)}>
        <Preview mix={cn('preview').className} image={previewImage} />
        <div {...cn('description')}>
          <Link
            to="/123"
            mix={cn('video-link').className}
            text={title}
          />
          <Link
            to="/123"
            mix={cn('author-link').className}
            text={channelTitle}
          />
          <div {...cn('description-wrap')}>
            <Views viewCount={viewCount} mix={cn('views').className} />
            {/* <p {...cn('date-published')}>2 days ago</p> */}
          </div>
        </div>
      </div>
    );
  }
}

VideoItem.propTypes = {
  mix: T.string,
  id: T.string.isRequired,
  video: T.object.isRequired,
};

VideoItem.defaultProps = {
  mix: ''
};

export default VideoItem;
