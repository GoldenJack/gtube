import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Icon from 'atoms/Icon';

const cn = bemHelper('views');

const Preview = ({ mix, viewCount }) => (
  <div {...cn('', '', mix)}>
    <Icon mix={cn('icon').className} icon="img/icons/views.svg" />
    <p>{viewCount}</p>
  </div>
);

Preview.propTypes = {
  mix: T.string,
  viewCount: T.string
};

Preview.defaultProps = {
  mix: '',
  viewCount: '0'
};

export default Preview;
