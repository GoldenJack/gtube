const getRandomProperty = obj => {
  return Math.floor(Math.random() * obj.length);
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
  return videos.map(item => {
    return {
      ...item,
      id: item.id.videoId
    };
  });
};

/**
 * for API query strings
 */

export const getQueryString = (key, data) => {
  const { category, params } = data;
  const queryPage = `/${category}?`;
  let queryParams = '';

  for (let i = 0; i < params.length; i++) {
    queryParams += `${params[i].name}=${params[i].value}&`;
  }
  return `${queryPage}${queryParams}key=${key}`;
};
