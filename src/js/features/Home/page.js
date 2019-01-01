import React, { Component } from 'react';
// import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Category from 'organisms/Category';

const cn = bemHelper('home');

class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div {...cn()}>
        <Category
          title="Trending videos"
          description="Original Music Videos featuring music written and produced by Name Namevich"
          videos={[1, 2, 3, 4, 5]}
        />
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home;
