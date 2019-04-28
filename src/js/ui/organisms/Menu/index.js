import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Card } from './components/Card';

const cn = bemHelper('menu');

export const Menu = ({ routes }) => {
  return (
    <div {...cn('')}>
      <div {...cn('cards')}>
        {routes && routes.map(route => (
          <Card
            {...route}
            key={route.title}
          />
        ))}
      </div>
    </div>
  );
};

Menu.propTypes = {
  routes: T.array.isRequired
};
