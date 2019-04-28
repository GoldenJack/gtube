import React from 'react';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Logo, Wrapper } from 'atoms';
import { Search } from 'organisms';

const cn = bemHelper('body-bar');

export const BodyBar = ({
  ...props
}) => {
  return (
    <div {...cn('')}>
      <Wrapper mix={cn('wrapper').className}>
        <Logo mix={cn('logo').className} />
        <Search mix={cn('search').className} />
      </Wrapper>
    </div>
  );
};
