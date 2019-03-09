import React, { Fragment } from 'react';
import T from 'prop-types';
import { useFetch } from 'hooks/useFetch';
import { api } from 'store/api';
import { getCountView } from 'utils/helper';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import WithPreloader from 'molecules/WithPreloader';

const cn = bemHelper('about-channel');

const propTypes = {
  match: T.object.isRequired
};

const AboutChannel = ({
  match: { params: { channelId } }
}) => {
  const aboutChannel = useFetch(() => api.channels.getItemByStats(channelId));

  if (aboutChannel.fetchStatus === 200) {
    const {
      snippet: { description },
      statistics: { subscriberCount, videoCount, viewCount }
    } = aboutChannel.data.items[0];
    return (
      <div {...cn()}>
        <div {...cn('wrap')}>
          <h3 {...cn('title')}>Описание</h3>
          <p {...cn('content-text')}>{description || 'Описание не найдено'}</p>
        </div>
        <div {...cn('wrap')}>
          <h3 {...cn('title')}>Статистика</h3>
          <ul {...cn('stats-list')}>
            <li>Подписчиков: {getCountView(subscriberCount)}</li>
            <li>Видео: {getCountView(videoCount)}</li>
            <li>Просмотров: {getCountView(viewCount)}</li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <WithPreloader ready={aboutChannel.fetchStatus}>
      <Fragment />
    </WithPreloader>
  );
};

AboutChannel.propTypes = propTypes;

export default AboutChannel;
