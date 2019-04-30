import React from 'react';
import T from 'prop-types';

import { Wrapper } from 'atoms';
import { WithPreloader } from 'molecules';
import { Category } from 'organisms';

export const PageOfPopular = ({
  data: { videos },
  fetchStatus
}) => {
  return (
    <Wrapper type="fluid">
      <WithPreloader fetchStatus={fetchStatus}>
        <Category videos={videos} />
      </WithPreloader>
    </Wrapper>
  );
};

PageOfPopular.propTypes = {
  data: T.object.isRequired,
  fetchStatus: T.string.isRequired
};
