import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';

const cn = bemHelper('preview');

const Preview = ({ image, mix }) => (
  <div {...cn('', '', mix)}>
    <img {...cn('image')} src={image} alt="/" />
  </div>
);

Preview.propTypes = {
  mix: T.string,
  image: T.string.isRequired
};

Preview.defaultProps = {
  mix: ''
};

export default Preview;
