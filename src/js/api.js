import ApiCall from 'services/ApiCall';
import { getQueryString } from 'utils/helper';
import { API_KEY } from 'config';


export const api = {
  channels: {
    getItem: channelId => {
      const url = getQueryString('channels', {
        part: 'snippet,contentDetails',
        id: channelId
      }, API_KEY);
      return ApiCall.get(url);
    }
    // getUserChannel: accessToken => {
    //   return request
    //     .get(`${depoint}/channels`)
    //     .query({
    //       part: 'contentDetails',
    //       mine: 'true',
    //       key: API_KEY
    //     })
    //     .set('Authorization', `Bearer ${accessToken}`)
    //     .then(res => res)
    //     .catch(err => err);
    // },
    // getItem: channelId => {
    //   return request
    //     .get(`${depoint}/channels`)
    //     .query({
    //       part: 'snippet,contentDetails',
    //       id: channelId,
    //       key: API_KEY
    //     })
    //     .then(res => res)
    //     .catch(err => err);
    // },
    // getItemByBranding: channelId => {
    //   return request
    //     .get(`${depoint}/channels`)
    //     .query({
    //       part: 'snippet,brandingSettings',
    //       id: channelId,
    //       key: API_KEY
    //     })
    //     .then(res => res)
    //     .catch(err => err);
    // },
    // getItemByStats: channelId => {
    //   return request
    //     .get(`${depoint}/channels`)
    //     .query({
    //       part: 'snippet,brandingSettings,statistics',
    //       id: channelId,
    //       key: API_KEY
    //     })
    //     .then(res => res)
    //     .catch(err => err);
    // },
  },
  // channelSection: {
  //   getChannelSection: channelId => {
  //     return request
  //       .get(`${depoint}/channelSections`)
  //       .query({
  //         part: 'contentDetails',
  //         mine: 'true',
  //         key: API_KEY
  //       })
  //       .set('Authorization', `Bearer ${accessToken}`)
  //       .then(res => res)
  //       .catch(err => err);
  //   },
  // },
  // playlists: {

  // },
  // subscriptions: {
  //   getUserSubscriptions: (accessToken, channelId) => {
  //     return request
  //       .get(`${depoint}/subscriptions`)
  //       .query({
  //         part: 'snippet,contentDetails',
  //         channelId,
  //         key: API_KEY
  //       })
  //       .set('Authorization', `Bearer ${accessToken}`)
  //       .then(res => res)
  //       .catch(err => err);
  //   }
  // },
  // search: {
  //   getList: queryString => {
  //     return request
  //       .get(`${depoint}/search`)
  //       .query({
  //         part: 'snippet',
  //         maxResults: '25',
  //         q: queryString,
  //         key: API_KEY
  //       })
  //       .then(res => res)
  //       .catch(err => err);
  //   },
  //   getTopic: (topicId, title) => {
  //     return request
  //       .get(`${depoint}/search`)
  //       .query({
  //         part: 'snippet',
  //         maxResults: '10',
  //         order: 'date',
  //         topicId,
  //         q: '',
  //         key: API_KEY
  //       })
  //       .then(res => {
  //         return {
  //           res,
  //           titleTopic: title
  //         };
  //       })
  //       .catch(err => err);
  //   }
  // },
  // videos: {
  //   getVideo: videoId => {
  //     return request
  //       .get(`${depoint}/videos`)
  //       .query({
  //         part: 'snippet,contentDetails,statistics',
  //         id: videoId,
  //         key: API_KEY
  //       })
  //       .then(res => res)
  //       .catch(err => err);
  //   },
  //   getTrendingVideos: () => {
  //     return request
  //       .get(`${depoint}/videos`)
  //       .query({
  //         part: 'snippet,contentDetails,statistics',
  //         chart: 'mostPopular',
  //         regionCode: 'RU',
  //         maxResults: '50',
  //         key: API_KEY
  //       })
  //       .then(res => res)
  //       .catch(err => err);
  //   },
  //   getLikedVideos: accessToken => {
  //     return request
  //       .get(`${depoint}/videos`)
  //       .query({
  //         part: 'snippet,contentDetails,statistics',
  //         myRating: 'like',
  //         regionCode: 'RU',
  //         maxResults: '50',
  //         key: API_KEY
  //       })
  //       .set('Authorization', `Bearer ${accessToken}`)
  //       .then(res => res)
  //       .catch(err => err);
  //   }
  // },
  // videoCategories: {
  //   getList: () => {
  //     return request
  //       .get(`${depoint}/videoCategories`)
  //       .query({
  //         part: 'snippet',
  //         hl: 'ru',
  //         regionCode: 'RU',
  //         key: API_KEY
  //       })
  //       .then(res => res)
  //       .catch(err => err);
  //   }
  // }
};
