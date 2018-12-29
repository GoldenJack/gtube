import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Icon from 'atoms/Icon';

const cn = bemHelper('views');

const Preview = ({ mix, countViews }) => (
  <div {...cn('', '', mix)}>
    <Icon mix={cn('icon').className} icon="img/icons/views.svg" />
    <p>{countViews}</p>
  </div>
);

Preview.propTypes = {
  mix: T.string,
  image: T.string.isRequired,
  countViews: T.string
};

Preview.defaultProps = {
  mix: '',
  countViews: '0'
};

export default Preview;
