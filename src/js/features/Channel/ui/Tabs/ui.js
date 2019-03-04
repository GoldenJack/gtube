import React from 'react';
import T from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import bemHelper from 'utils/bem-helper';
import './style.scss';


const cn = bemHelper('tabs');

const propTypes = {
  mix: T.string,
  routes: T.array.isRequired,
  menu: T.array.isRequired
};

const defaultProps = {
  mix: '',
};

const Tabs = ({
  mix,
  routes,
  menu
}) => {
  return (
    <div {...cn('', '', mix)}>
      <div {...cn('menu')}>
        {menu.map(({ name, url }) => (
          <NavLink
            to={url}
            {...cn('menu-link')}
            activeClassName={cn('menu-link--active').className}
          >
            {name}
            <span {...cn('menu-hr')} />
          </NavLink>
        ))}
      </div>

      <div {...cn('content')}>
        {routes && routes.map(({ path, component: Component }) => (
          <Route
            key={path}
            exact
            path={path}
            component={Component}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
