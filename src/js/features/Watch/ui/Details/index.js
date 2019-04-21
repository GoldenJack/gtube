import React, { useState, useRef } from 'react';
import * as T from 'prop-types';
import { getCountView, getTextHtml } from 'utils/helper';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import {
  Avatar,
  Button,
  Icon,
  Views
} from 'atoms';
// import Ratio from 'molecules/Ratio';
import { Link } from 'react-router-dom';

const cn = bemHelper('details');

const Details = ({
  mix,
  videoInfo: {
    name,
    viewCount,
    channelId,
    channelTitle,
    // likeCount,
    // dislikeCount,
    description
  }
}) => {
  // eslint-disable-next-line no-unused-vars
  const [fullDesc, setFullDesc] = useState(false);
  const descriptionRef = useRef(null);
  const setSubscribe = e => {
    e.preventDefault();
  };

  const getDescription = () => {
    const content = getTextHtml(description);
    if (content) {
      return (
        // eslint-disable-next-line react/no-danger
        <p dangerouslySetInnerHTML={{ __html: content }} />
      );
    } else {
      return (
        <p>Описание отсутствует</p>
      );
    }
  };

  const toggleDescription = e => {
    e.preventDefault();
    setFullDesc(!fullDesc);
  };

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
              <Link to={`/channel/${channelId}/home`}>
                <h5 {...cn('author-name')}>{channelTitle}</h5>
              </Link>
              <p {...cn('author-date')}>Published on Jun 27.2018</p>
            </div>
          </div>
          <Button
            mix={cn('sub-button').className}
            effect={setSubscribe}
            text="Подписаться"
          />
        </div>
        <div
          {...cn('video-description')}
          ref={descriptionRef}
        >
          {getDescription()}
          <p onClick={toggleDescription} {...cn('toggle-description')} role="none">
            <span {...cn('toggle-description-text')}>{fullDesc ? 'Скрыть' : 'Показать'}</span>
            <Icon icon="img/icons/open-full-text.svg" mix={cn('toggle-description-icon').className} />
          </p>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  mix: T.string,
  videoInfo: T.object.isRequired
};

Details.defaultProps = {
  mix: ''
};

export default Details;
