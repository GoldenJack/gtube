import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Icon from 'atoms/Icon';

const cn = bemHelper('burger');

class Burger extends Component {
  componentDidMount() {

  }

  render() {
    const { mix, toggleShow } = this.props;
    return (
      <div {...cn('', '', mix)}>
        <Icon
          mix={cn('icon').className}
          icon="img/icons/menu.svg"
          effect={toggleShow}
        />
      </div>
    );
  }
}

Burger.propTypes = {
  mix: T.string,
  toggleShow: T.func.isRequired
};

Burger.defaultProps = {
  mix: ''
};

export default Burger;
