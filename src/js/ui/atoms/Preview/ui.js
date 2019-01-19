import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('preview');

class Preview extends Component {
  render() {
    const { image, mix } = this.props;
    const imageNotFound = 'https://dummyimage.com/445x250/cccccc/fa2275.png&text=Image+not+found';
    const src = image.indexOf('live') ? image : imageNotFound;

    return (
      <img
        {...cn('image', '', mix)}
        src={src}
        alt="/"
        onError={this.onError}
      />
    );
  }
}

Preview.propTypes = {
  mix: T.string,
  image: T.string.isRequired
};

Preview.defaultProps = {
  mix: ''
};

export default Preview;
