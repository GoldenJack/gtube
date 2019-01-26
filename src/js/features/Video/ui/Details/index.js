import React, { Component } from 'react';
import * as T from 'prop-types';
import { getCountView } from 'utils/helper';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Views from 'atoms/Views';
import Avatar from 'atoms/Avatar';
import Button from 'atoms/Button';
import { Link } from 'react-router-dom';

const cn = bemHelper('details');

class Details extends Component {
  setSubscribe = e => {
    e.preventDefault();
  }

  getDescription = () => {
    const { videoInfo: { description } } = this.props;
    if (description.length === 0) {
      return (
        <p>Description not found</p>
      );
    // } else if (description.length > 600) {
    //   return (
    //     <p>{description.substr(0, 600)}</p>
    //   );
    } else {
      return (
        <p>{description}</p>
      );
    }
  }

  render() {
    const {
      mix,
      videoInfo: {
        name,
        viewCount,
        channelId,
        channelTitle
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
