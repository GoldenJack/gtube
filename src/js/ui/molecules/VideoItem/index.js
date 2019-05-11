import React, { useContext } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';
import { PlayerContext } from 'context';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Button, Icon, Preview, Title } from 'atoms';

const cn = bemHelper('video-item');

export const VideoItem = ({
  videoId,
  videoImage,
  videoTitle,
  channelId,
  channelTitle,
  viewsCount
}) => {
  const { openPlayer } = useContext(PlayerContext);

  return (
    <div {...cn('')}>
      <div {...cn('wrap')}>
        <Preview mix={cn('preview').className} image={videoImage} />
        <div {...cn('description')}>
          <div {...cn('caption')}>
            <Title mix={cn('title').className} type="h6">{videoTitle}</Title>
            <Link to={`channel/${channelId}/home`} {...cn('channel')}>
              {channelTitle}
            </Link>
          </div>
          <div {...cn('buttons')}>
            <Button onClick={() => openPlayer(videoId)}>
              <Icon mix={cn('play-icon').className} icon="play" />
            </Button>
          </div>
          <div {...cn('statistics')}>
            <div {...cn('views')}>
              <Icon icon="eyes" mix={cn('views-icon').className} />
              {viewsCount}
            </div>
          </div>
        </div>
        {/* <div {...cn('description')}>
          <Link
            to={`channel/${channelId}/home`}
            mix={cn('author-link').className}
            text={channelTitle}
          />
          <div {...cn('description-wrap')}>
            {statistics && (
              <Views viewCount={views} mix={cn('views').className} />
            )}
             <p {...cn('date-published')}>2 days ago</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  mix: T.string,
  videoId: T.string.isRequired,
  videoImage: T.string,
  videoTitle: T.string,
  channelId: T.string,
  channelTitle: T.string,
  viewsCount: T.string
};

VideoItem.defaultProps = {
  mix: '',
  videoImage: '',
  videoTitle: '',
  channelId: '',
  channelTitle: '',
  viewsCount: ''
};
