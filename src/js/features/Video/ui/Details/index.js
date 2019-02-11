import React, { Component } from 'react';
import * as T from 'prop-types';
import { getCountView, getTextHtml } from 'utils/helper';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Views from 'atoms/Views';
import Avatar from 'atoms/Avatar';
import Button from 'atoms/Button';
import Ratio from 'molecules/Ratio';
import { Link } from 'react-router-dom';

const cn = bemHelper('details');

class Details extends Component {
  desc = React.createRef();

  setSubscribe = e => {
    e.preventDefault();
  }

  getDescription = () => {
    const { videoInfo: { description } } = this.props;
    const content = getTextHtml(description);

    return (
      // eslint-disable-next-line react/no-danger
      <p dangerouslySetInnerHTML={{ __html: content }} />
    );
  }

  render() {
    const {
      mix,
      videoInfo: {
        name,
        viewCount,
        channelId,
        channelTitle,
        likeCount,
        dislikeCount
      }
    } = this.props;
    const views = getCountView(viewCount);
    return (
      <div {...cn('', '', mix)}>
        <div {...cn('header')}>
          <div {...cn('default-data')}>
            <h3 {...cn('video-name')}>{name}</h3>
          </div>
          <div {...cn('statistics-data')}>
            <Views viewCount={views} mix={cn('views').className} />
            {/* <Ratio likeCount={likeCount} dislikeCount={dislikeCount} /> */}
          </div>
          <div {...cn('info-channel')}>
            <div {...cn('author-channel')}>
              <Avatar mix={cn('avatar').className} />
              <div {...cn('author')}>
                <Link to={`/channel/${channelId}`}>
                  <h5 {...cn('author-name')}>{channelTitle}</h5>
                </Link>
                <p {...cn('author-date')}>Published on Jun 27.2018</p>
              </div>
            </div>
            <Button
              mix={cn('sub-button').className}
              effect={this.setSubscribe}
              text="Подписаться"
            />
          </div>
          <div {...cn('video-description')}>
            {this.getDescription()}
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  mix: T.string,
  videoInfo: T.object.isRequired
};

Details.defaultProps = {
  mix: ''
};

export default Details;
