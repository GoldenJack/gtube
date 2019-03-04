import React, { Fragment } from 'react';
import * as T from 'prop-types';
import { useChannel } from 'hooks/useChannel';
import { api } from 'store/api';
import { OK } from 'constants/httpStatusCode';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Wrapper from 'atoms/Wrapper';
import Button from 'atoms/Button';
import WithPreloader from 'molecules/WithPreloader';
import Tabs from './ui/Tabs';
import HomeChannel from './pages/Home';
import VideosChannel from './pages/Videos';
import PlaylistsChannel from './pages/Playlists';
import AboutChannel from './pages/About';

const cn = bemHelper('channel');

const propTypes = {
  match: T.object.isRequired
};

const Channel = ({
  match: { params: { channelId } }
}) => {
  const data = useChannel(() => api.channels.getItem(channelId));
  const ROUTES = [
    {
      path: '/channel/:channelId/home',
      component: HomeChannel
    },
    {
      path: '/channel/:channelId/about',
      component: AboutChannel
    },
    {
      path: '/channel/:channelId/videos',
      component: VideosChannel
    },
    {
      path: '/channel/:channelId/playlists',
      component: PlaylistsChannel
    },
  ];

  const menu = [
    {
      name: 'Home',
      url: `/channel/${channelId}/home`
    },
    {
      name: 'Videos',
      url: `/channel/${channelId}/videos`
    },
    {
      name: 'Playlists',
      url: `/channel/${channelId}/playlists`
    },
    {
      name: 'About',
      url: `/channel/${channelId}/about`
    },
  ];

  const _render = () => {
    if (data.fetchStatus === OK) {
      const {
        brandingSettings: { channel, image },
        snippet: { thumbnails }
      } = data.channelData.items[0];

      const headStyle = { backgroundImage: `url(${image.bannerTvHighImageUrl})` };

      return (
        <Fragment>
          <div {...cn('head')} style={headStyle}>
            <img {...cn('thumb')} src={thumbnails.default.url} alt="/" />
            <div {...cn('info')}>
              <h3 {...cn('caption')}>{ channel.title }</h3>
              <Button text="Subscribe" />
            </div>
          </div>
          <div {...cn('body')}>
            <Tabs mix={cn('tabs').className} routes={ROUTES} menu={menu} />
          </div>
        </Fragment>
      );
    }
    return null;
  };

  return (
    <Wrapper padding="0">
      <div {...cn()}>
        <WithPreloader ready={data.fetchStatus}>
          { _render() }
        </WithPreloader>
      </div>
    </Wrapper>
  );
};

Channel.propTypes = propTypes;

export default Channel;
