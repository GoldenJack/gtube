import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import withMenu from 'HOC/withMenu';
import './style.scss';

import Header from 'organisms/Header';
import Sidebar from 'organisms/Sidebar';

const cn = bemHelper('default-template');

const Default = ({ children, showMenu, isMobile, toggleShow, ...props }) => {
  const toggleClass = showMenu && !isMobile ? 'with-menu' : 'full-width';
  const toggleClassOverlay = showMenu ? 'open' : 'close';
  return (
    <div {...cn()}>
      <Header mix={cn('header').className} toggleShow={toggleShow} {...props} />
      <div {...cn('wrap')}>
        {isMobile && (
          <div
            {...cn('overlay', toggleClassOverlay)}
            role="none"
            onClick={toggleShow}
          />
        )}
        <Sidebar showMenu={showMenu} isMobile={isMobile} {...props} />
        <div {...cn('content', `${!isMobile && toggleClass}`)}>
          {children}
        </div>
      </div>
    </div>
  );
};

Default.propTypes = {
  children: T.array.isRequired,
  showMenu: T.bool.isRequired,
  isMobile: T.bool.isRequired,
  toggleShow: T.func.isRequired
};

export default withMenu(Default);
