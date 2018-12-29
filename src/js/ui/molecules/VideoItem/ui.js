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

  render() {
    const { mix } = this.props;
    return (
      <div {...cn('', '', mix)}>
        <Preview mix={cn('preview').className} image="img/demo/demo.png" />
        <div {...cn('description')}>
          <Link
            to="/123"
            mix={cn('video-link').className}
            text="Ванпанчмен - Сайтама vs Геноса (Полный Бой)"
          />
          <Link
            to="/123"
            mix={cn('author-link').className}
            text="boyceavenve"
          />
          <div {...cn('description-wrap')}>
            <Views mix={cn('views').className} />
            <p {...cn('date-created')}>2 days ago</p>
          </div>
        </div>
      </div>
    );
  }
}

VideoItem.propTypes = {
  mix: T.string
};

VideoItem.defaultProps = {
  mix: ''
};

export default VideoItem;
