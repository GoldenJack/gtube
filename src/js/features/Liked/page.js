import React, { Component } from 'react';
import * as T from 'prop-types';

import WithPreloader from 'molecules/WithPreloader';
import Category from 'organisms/Category';

class Video extends Component {
  componentDidMount() {
    const {
      accessToken,
      readyAuth,
      readyLiked,
      getLikedVideos
    } = this.props;
    readyAuth && !readyLiked && getLikedVideos(accessToken);
  }

  componentDidUpdate(prevProps) {
    const {
      accessToken,
      readyAuth,
      readyLiked,
      getLikedVideos
    } = this.props;

    if (prevProps.readyAuth !== readyAuth && prevProps.readyLiked !== !readyLiked) {
      readyAuth && !readyLiked && getLikedVideos(accessToken);
    }
  }

  render() {
    const {
      readyLiked,
      videosLiked: { items = false }
    } = this.props;

    return (
      <WithPreloader readyContent={readyLiked}>
        {items && (
          <Category
            title="Liked"
            description="Liked u videos"
            videos={items}
          />
        )}
      </WithPreloader>
    );
  }
}

Video.propTypes = {
  accessToken: T.string.isRequired,
  readyAuth: T.bool.isRequired,
  readyLiked: T.bool.isRequired,
  getLikedVideos: T.func.isRequired,
  videosLiked: T.any.isRequired
};

export default Video;
