import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import { Link } from 'react-router-dom';
import './style.scss';

import { Icon } from 'atoms';

const cn = bemHelper('docket');

export const Docket = ({ title, list }) => (
  <div {...cn()}>
    <h4 {...cn('title')}>{ title }</h4>
    <div {...cn('list')}>
      {list.map(({ to, icon, name }) => (
        <div key={name} {...cn('link')}>
          <Icon mix={cn('icon').className} icon={icon} />
          <Link to={to}>{name}</Link>
        </div>
      ))}
    </div>
  </div>
);

Docket.propTypes = {
  title: T.string.isRequired,
  list: T.array.isRequired
};
