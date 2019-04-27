import React, { useState } from 'react';
import * as T from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useMenu } from 'hooks';
import { routes } from 'constants/routes';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { CommonWrapper } from 'atoms';
import Header from 'organisms/Header';
import { Menu } from 'organisms/Menu';

const cn = bemHelper('theme');

export const Default = withRouter(({
  children,
  ...props
}) => {
  const { visibleMenu, toggleVisibleMenu, setVisibleMenu } = useMenu();

  return (
    <div {...cn('')}>
      <Header
        mix={cn('header').className}
        toggleShow={toggleVisibleMenu}
        visibleMenu={visibleMenu}
        {...props}
      />
      <div {...cn('wrap')}>
        <CommonWrapper mix={cn('content').className}>
          {children}
        </CommonWrapper>
        <Menu visible={visibleMenu} routes={routes} setVisibleMenu={setVisibleMenu} />
      </div>
    </div>
  );
});

Default.propTypes = {
  children: T.node.isRequired
};
