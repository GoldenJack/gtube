import React from 'react';
import { routes } from 'constants/routes';
import T from 'prop-types';

import { Wrapper } from 'atoms';
import { Menu } from 'organisms';

export const PageOfHome = () => {

  return (
    <Wrapper>
      <Menu routes={routes} />
    </Wrapper>
  );
};
