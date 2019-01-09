import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import { sortVideos } from 'utils/helper';
import './style.scss';

import Category from 'organisms/Category';
// import Slider from 'organisms/Slider';
import WithPreloader from 'molecules/WithPreloader';

const cn = bemHelper('home');

class Home extends Component {
  componentDidMount() {
    const { getHomeData, readyHome } = this.props;
    !readyHome && getHomeData();
  }

  _renderContent = () => {
    const { home } = this.props;
    return home.map(({ titleTopic, topic: { items } }) => {
      const videos = sortVideos(items);
      return (
        <Category
          key={titleTopic}
          title={titleTopic}
          description={titleTopic}
          videos={videos}
        />

        // <Slider
        //   key={titleTopic}
        //   typeSlider="videos"
        //   title={titleTopic}
        //   description={titleTopic}
        //   videos={videos}
        // />
      );
    });
  }

  render() {
    const { readyHome } = this.props;
    return (
      <div {...cn()}>
        <WithPreloader readyContent={readyHome}>
          { readyHome && this._renderContent() }
        </WithPreloader>
      </div>
    );
  }
}

Home.propTypes = {
  getHomeData: T.func.isRequired,
  readyHome: T.bool.isRequired,
  home: T.any
};

Home.defaultProps = {
  home: null
};

export default Home;
