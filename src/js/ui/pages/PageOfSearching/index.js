import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Wrapper } from 'atoms';
import { WithPreloader } from 'molecules';
import { Category } from 'organisms';

const cn = bemHelper('searching');

export const PageOfSearching = ({
  fetchStatus,
  searchString,
  data
}) => {
  return (
    <Wrapper mix={cn('wrapper').className} type="fluid">
      <WithPreloader fetchStatus={fetchStatus}>
        <Category videos={data.videos} />
      </WithPreloader>
    </Wrapper>
  );
};

PageOfSearching.propTypes = {
  searchString: T.string.isRequired,
  fetchStatus: T.string.isRequired,
  data: T.object.isRequired
};
