import React from 'react';
import { routes } from 'constants/routes';
import T from 'prop-types';

import { Wrapper } from 'atoms';
import { Menu, Player } from 'organisms';

export const PageOfHome = () => {

  return (
    <Wrapper>
      <Player videoId="-xjd6PfS1o8" />
      {/*<Menu routes={routes} />*/}
    </Wrapper>
  );
};
