import React, { Fragment } from 'react';
import * as T from 'prop-types';
import { routes } from 'constants/routes';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Docket from 'molecules/Docket';

const cn = bemHelper('sidebar');

const Sidebar = ({
  visible,
  floating,
  onClose,

  readyAuth
}) => {
  const { auth, guest } = routes;
  const toggleClass = visible ? 'visible' : 'hidden';

  return (
    <Fragment>
      {floating && (
        <div
          {...cn('overlay', visible ? 'open' : 'close')}
          role="none"
          onClick={onClose}
        />
      )}
      <div {...cn('', toggleClass)}>
        {readyAuth ? (
          <Fragment>
            <Docket
              title={auth.main.title}
              list={auth.main.menu}
            />
            <Docket
              title={auth.library.title}
              list={auth.library.menu}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Docket
              title={guest.main.title}
              list={guest.main.menu}
            />
            <Docket
              title={guest.library.title}
              list={guest.library.menu}
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

Sidebar.propTypes = {
  showMenu: T.bool.isRequired,
  isMobile: T.bool.isRequired
};

export default Sidebar;
