import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('home');

class Home extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div {...cn()}>
        Home
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home;
