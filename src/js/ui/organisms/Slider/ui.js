import React, { Component, Fragment } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import VideoItem from 'molecules/VideoItem';

const cn = bemHelper('slider');

const Slider = ({ videos }) => {
  
};

Slider.propTypes = {
  title: T.string,
  description: T.string,
  videos: T.array,
  typeSlider: T.oneOf([
    'videos'
  ]).isRequired
};

Slider.defaultProps = {
  title: '',
  description: '',
  videos: []
};

export default Slider;
