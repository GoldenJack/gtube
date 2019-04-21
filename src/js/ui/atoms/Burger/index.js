import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon } from 'atoms';

const cn = bemHelper('burger');

export const Burger = ({
  mix,
  toggleShow,
  visibleMenu
}) => {
  return (
    <div {...cn('', { 'open': visibleMenu }, mix)}>
      <Icon
        mix={cn('icon').className}
        icon="img/icons/menu.svg"
        onClick={toggleShow}
      />
    </div>
  );
};

Burger.propTypes = {
  mix: T.string,
  toggleShow: T.func.isRequired
};

Burger.defaultProps = {
  mix: ''
};
