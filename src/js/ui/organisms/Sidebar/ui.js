import React, { Component } from 'react';
import * as T from 'prop-types';
import { routes } from 'constants/routes';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Docket from 'molecules/Docket';

const cn = bemHelper('sidebar');

class Sidebar extends Component {
  state = {
    show: true
  }

  componentDidMount() {

  }

  render() {
    const { show } = this.state;
    const { main, library } = routes;
    return (
      <div {...cn('', show)}>
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

export default Sidebar;
