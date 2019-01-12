import request from 'superagent';
import { API_KEY } from 'config';
import { getQueryString } from 'utils/helper';

const depoint = 'https://www.googleapis.com/youtube/v3';

export const api = {
  channels: {
    getUserChannel: accessToken => {
      const query = getQueryString(API_KEY, {
        category: 'channels',
        params: [
          { name: 'part', value: 'contentDetails' },
          { name: 'mine', value: 'true' }
        ]
      });

      return request
        .get(depoint + query)
        .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    },
    getItem: () => {
      const query = getQueryString(API_KEY, {
        category: 'channels',
        params: [
          { name: 'part', value: 'snippet,contentDetails,statistics' },
          { name: 'id', value: 'UCBR8-60-B28hp2BmDPdntc' }
        ]
      });

      return request
        .get(depoint + query)
        .then(res => res)
        .catch(err => err);
    }
  },
  subscriptions: {
    getUserSubscriptions: (accessToken, channelId) => {
      const query = getQueryString(API_KEY, {
        category: 'subscriptions',
        params: [
          { name: 'part', value: 'snippet,contentDetails' },
          { name: 'channelId', value: channelId }
        ]
      });

      return request
        .get(depoint + query)
        .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  },
  search: {
    getList: q => {
      const query = getQueryString(API_KEY, {
        category: 'search',
        params: [
          { name: 'part', value: 'snippet' },
          { name: 'maxResults', value: '25' },
          { name: 'q', value: q }
        ]
      });

      return request
        .get(depoint + query)
        .then(res => res)
        .catch(err => err);
    },
    getTopic: (topicId, title) => {
      const query = getQueryString(API_KEY, {
        category: 'search',
        params: [
          { name: 'part', value: 'snippet' },
          { name: 'maxResults', value: '10' },
          { name: 'order', value: 'date' },
          { name: 'topicId', value: topicId },
          { name: 'q', value: '' }
        ]
      });
      return request
        .get(depoint + query)
        .then(res => {
          return {
            res,
            titleTopic: title
          };
        })
        .catch(err => err);
    }
  },
  videos: {
    getVideo: videoId => {
      const query = getQueryString(API_KEY, {
        category: 'videos',
        params: [
          { name: 'part', value: 'snippet,contentDetails,statistics' },
          { name: 'id', value: videoId }
        ]
      });

      return request
        .get(depoint + query)
        .then(res => res)
        .catch(err => err);
    },
    getTrendingVideos: () => {
      const query = getQueryString(API_KEY, {
        category: 'videos',
        params: [
          { name: 'part', value: 'snippet,contentDetails,statistics' },
          { name: 'chart', value: 'mostPopular' },
          { name: 'regionCode', value: 'RU' },
          { name: 'maxResults', value: '50' }
        ]
      });

      return request
        .get(depoint + query)
        .then(res => res)
        .catch(err => err);
    },
    getLikedVideos: accessToken => {
      const query = getQueryString(API_KEY, {
        category: 'videos',
        params: [
          { name: 'part', value: 'snippet,contentDetails,statistics' },
          { name: 'myRating', value: 'like' },
          { name: 'regionCode', value: 'RU' },
          { name: 'maxResults', value: '50' }
        ]
      });

      return request
        .get(depoint + query)
        .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  },
  videoCategories: {
    getList: () => {
      const query = getQueryString(API_KEY, {
        category: 'videoCategories',
        params: [
          { name: 'part', value: 'snippet' },
          { name: 'hl', value: 'ru' },
          { name: 'regionCode', value: 'RU' }
        ]
      });

      return request
        .get(depoint + query)
        .then(res => res)
        .catch(err => err);
    }
  }
};
