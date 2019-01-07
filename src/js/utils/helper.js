const getRandomProperty = obj => {
  return Math.floor(Math.random() * obj.length);
};


/**
 * special functions for all project
 */
export const getRandomTopic = obj => {
  const { keys } = obj;
  return keys.map(key => {
    const { children } = obj[key];
    const topicKey = getRandomProperty(children);
    return children[topicKey];
  });
};

export const sortVideos = videos => {
  return videos.map(item => {
    return {
      ...item,
      id: item.id.videoId
    };
  });
};
