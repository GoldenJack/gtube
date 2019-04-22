import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Title } from 'atoms';

const cn = bemHelper('caption');

export const Caption = ({ mix, type, title, subtitle }) => {
  return (
    <div {...cn('', '', mix)}>
      <Title type={type} mix={cn('title').className}>{title}</Title>
      <p {...cn('subtitle', type)}>{subtitle}</p>
    </div>
  );
};

Caption.propTypes = {
  mix: T.string,
  type: T.string.isRequired,
  title: T.string.isRequired,
  subTitle: T.string.isRequired
};
Caption.defaultProps = {
  mix: '',
};
