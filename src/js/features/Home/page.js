import React, { useEffect } from 'react';
import * as T from 'prop-types';
import { sortVideos } from 'utils/helper';

import Wrapper from 'atoms/Wrapper';
import Category from 'organisms/Category';
import WithPreloader from 'molecules/WithPreloader';

const Home = ({
  getHomeData,
  readyHome,
  home
}) => {
  useEffect(() => { !readyHome && getHomeData(); }, []);

  const _render = () => {
    return home.map(({ titleTopic, topic: { items } }) => {
      const videos = sortVideos(items);
      return (
        <Category
          key={titleTopic}
          title={titleTopic}
          description={titleTopic}
          videos={videos}
        />
      );
    });
  };

  return (
    <Wrapper>
      <WithPreloader ready={readyHome && 200}>
        { readyHome && _render() }
      </WithPreloader>
    </Wrapper>
  );
};

Home.propTypes = {
  getHomeData: T.func.isRequired,
  readyHome: T.bool.isRequired,
  home: T.any
};

Home.defaultProps = {
  home: null
};

export default Home;
