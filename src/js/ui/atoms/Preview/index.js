import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('preview');

export const Preview = ({ image, mix }) => {
  const imageNotFound = 'https://dummyimage.com/445x250/cccccc/fa2275.png&text=Image+not+found';
  const src = image.indexOf('live') ? image : imageNotFound;

  return (
    <img
      {...cn('image', '', mix)}
      src={src}
      alt="/"
    />
  );
};

Preview.propTypes = {
  mix: T.string,
  image: T.string.isRequired
};

Preview.defaultProps = {
  mix: ''
};
