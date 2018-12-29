import React, { Component } from 'react';
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
    const { showMenu } = this.props;
    const { main, library } = routes;
    const toggleClass = showMenu ? 'visible' : 'hidden';

    return (
      <div {...cn('', toggleClass)}>
        <Docket
          title={main.title}
          list={main.menu}
        />
        <Docket
          title={library.title}
          list={library.menu}
        />
      </div>
    );
  }
}

Sidebar.propTypes = {
  showMenu: T.bool.isRequired
};

export default Sidebar;
