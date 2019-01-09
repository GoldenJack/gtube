import request from 'superagent';
import { API_KEY } from 'config';

const depoint = 'https://www.googleapis.com/youtube/v3';

export const api = {
  channels: {
    getUserChannel: accessToken => {
      return request
        .get(`${depoint}/channels?part=contentDetails&mine=true&key=${API_KEY}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    },
    getItem: () => {
      return request
        .get(`${depoint}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCBR8-60-B28hp2BmDPdntcQ&key=${API_KEY}`)
        // .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  },
  subscriptions: {
    getUserSubscriptions: (accessToken, channelId) => {
      return request
        .get(`${depoint}/subscriptions?part=snippet,contentDetails&channelId=${channelId}&key=${API_KEY}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  },
  search: {
    getList: query => {
      return request
        .get(`${depoint}/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`)
        .then(res => res)
        .catch(err => err);
    },
    getTopic: (topicId, title) => {
      return request
        .get(`${depoint}/search?part=snippet&maxResults=10&order=date&topicId=${topicId}&q=&key=${API_KEY}`)
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
      return request
        .get(`${depoint}/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`)
        .then(res => res)
        .catch(err => err);
    },
    getTrendingVideos: () => {
      return request
        .get(`${depoint}/videos?part=snippet,statistics&maxResults=50&chart=mostPopular&regionCode=RU&key=${API_KEY}`)
        .then(res => res)
        .catch(err => err);
    },
    getLikedVideos: accessToken => {
      return request
        .get(`${depoint}/videos?part=snippet,statistics&maxResults=50&myRating=like&regionCode=RU&key=${API_KEY}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  },
  videoCategories: {
    getList: () => {
      return request
        .get(`${depoint}/videoCategories?part=snippet&hl=ru&regionCode=RU&key=${API_KEY}`)
        // .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  }
};
