import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon } from 'atoms';

const cn = bemHelper('views');

export const Views = ({ mix, viewCount }) => (
  <div {...cn('', '', mix)}>
    <Icon mix={cn('icon').className} icon="img/icons/views.svg" />
    <p>{viewCount}</p>
  </div>
);

Views.propTypes = {
  mix: T.string,
  viewCount: T.string
};

Views.defaultProps = {
  mix: '',
  viewCount: '0'
};
