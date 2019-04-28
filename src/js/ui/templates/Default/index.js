import React from 'react';
import * as T from 'prop-types';
import { withRouter } from 'react-router-dom';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon } from 'atoms';
import { Header } from 'organisms';

const cn = bemHelper('theme');

export const Default = withRouter(({
  children,
  ...props
}) => {
  return (
    <div {...cn('', 'light')}>
      <Header mix={cn('header').className} {...props} />
      <div {...cn('wrap')}>
        {children}
        {/*<Menu visible={visibleMenu} routes={routes} setVisibleMenu={setVisibleMenu} />*/}
      </div>
    </div>
  );
});

Default.propTypes = {
  children: T.node.isRequired
};
