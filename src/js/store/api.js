import request from 'superagent';
import { API_KEY } from 'config';

const depoint = 'https://www.googleapis.com/youtube/v3';

export const api = {
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
    }
  },
  channels: {
    getList: () => {
      request
        .get(`${depoint}/channels?part=contentDetails&mine=true&key=${API_KEY}`)
        // .set('Authorization', `Bearer ${accessToken}`)
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
  videoCategories: {
    getList: () => {
      return request
        .get(`${depoint}/videoCategories?part=snippet&regionCode=RU&key=${API_KEY}`)
        // .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  }
};
