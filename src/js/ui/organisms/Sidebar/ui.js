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
  readyAuth,
  toggleTheme
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
        <span onClick={toggleTheme} role="none">Swap theme</span>
      </div>
    </Fragment>
  );
};

export default Sidebar;
