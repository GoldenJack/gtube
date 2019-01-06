import React, { Component, Fragment } from 'react';
import * as T from 'prop-types';
import { routes } from 'constants/routes';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Docket from 'molecules/Docket';

const cn = bemHelper('sidebar');

class Sidebar extends Component {
  componentDidMount() {

  }

  render() {
    const { showMenu, readyAuth } = this.props;
    const { auth, guest } = routes;
    const toggleClass = showMenu ? 'visible' : 'hidden';

    return (
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
    );
  }
}

Sidebar.propTypes = {
  showMenu: T.bool.isRequired,
  isMobile: T.bool.isRequired
};

export default Sidebar;
