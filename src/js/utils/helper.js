const getRandomProperty = obj => {
  return Math.floor(Math.random() * obj.length);
};

export const getCountView = number => {
  return number && number.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1,');
};

export const getTextHtml = string => {
  return string.replace(/\r\n|\r|\n/g, '</br>');
};


/**
 * special functions for all project
 * random topic for Home Page
 */
export const getRandomTopic = obj => {
  const { keys } = obj;
  return keys.map(key => {
    const { children } = obj[key];
    const topicKey = getRandomProperty(children);
    return children[topicKey];
  });
};


/**
 * For sorting videos id
 * @param {array} videos
 * @returns array
 */
export const sortVideos = videos => {
  if (videos.length === 0) return [];
  return videos.map(item => {
    return {
      ...item,
      id: item.id.videoId
    };
  });
};

/**
 * getQueryString
 * @param {String} page - Channel/Search/Videos/etc
 * @param {*} params - It's options for fetch data from api Youtube
 * @param {*} key - API KEY developer
 */
export const getQueryString = (page, params, key) => {
  const depoint = 'https://www.googleapis.com/youtube/v3';
  const paramsKeys = Object.keys(params);
  const url = `${depoint}/${page}`;

  const queryString = paramsKeys.map(queryKey => {
    return `${queryKey}=${params[queryKey]}&`;
  }).join('');

  return `${url}?${queryString}key=${key}`;
};
