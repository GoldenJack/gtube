import React from 'react';
import ReactDOM from 'react-dom';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Card } from './components/Card';

const cn = bemHelper('menu');

export const Menu = ({
  visible,
  routes,
  setVisibleMenu
}) => {
  return (
    <div {...cn('', { 'open': visible })}>
      <div {...cn('cards')}>
        {routes && routes.map(route => (
          <Card
            {...route}
            key={route.title}
            setVisibleMenu={setVisibleMenu}
          />
        ))}
      </div>
    </div>
  );
};
