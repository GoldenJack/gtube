import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import withMenu from 'HOC/withMenu';
import './style.scss';

import Header from 'organisms/Header';
import Sidebar from 'organisms/Sidebar';

const cn = bemHelper('default-template');

const Default = ({ children, showMenu, ...props }) => {
  const toggleClass = showMenu ? 'with-menu' : 'full-width';
  return (
    <div {...cn()}>
      <Header mix={cn('header').className} {...props} />
      <div {...cn('wrap')}>
        <Sidebar showMenu={showMenu} {...props} />
        <div {...cn('content', toggleClass)}>
          {children}
        </div>
      </div>
    </div>
  );
}

Default.propTypes = {
  children: T.object.isRequired,
  showMenu: T.bool.isRequired
};

export default withMenu(Default);
