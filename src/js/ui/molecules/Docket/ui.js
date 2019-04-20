import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import { Link } from 'react-router-dom';
import './style.scss';

import Icon from 'atoms/Icon';

const cn = bemHelper('docket');

const propTypes = {
  title: T.string.isRequired,
  list: T.array.isRequired
};

const Docket = ({ title, list }) => (
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

Docket.propTypes = propTypes;

export default Docket;
