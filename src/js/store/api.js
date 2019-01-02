import request from 'superagent';
import { API_KEY } from 'config';

const depoint = 'https://www.googleapis.com/youtube/v3';

export const api = {
  trending: {
    getList: accessToken => {
      return request
        .get(`${depoint}/videos?part=snippet,statistics&chart=mostPopular&regionCode=RU&key=${API_KEY}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  },
  channels: {
    getList: accessToken => {
      request
        .get(`${depoint}/channels?part=contentDetails&mine=true&key=${API_KEY}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  },
  videoCategories: {
    getList: (accessToken) => {
      return request
        .get(`${depoint}/videoCategories?part=snippet&regionCode=RU&key=${API_KEY}`)
        .set('Authorization', `Bearer ${accessToken}`)
        .then(res => res)
        .catch(err => err);
    }
  }
};
