import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('preview');

const Preview = ({ image, mix }) => (
  <img {...cn('image', '', mix)} src={image} alt="/" />
);

Preview.propTypes = {
  mix: T.string,
  image: T.string.isRequired
};

Preview.defaultProps = {
  mix: ''
};

export default Preview;
