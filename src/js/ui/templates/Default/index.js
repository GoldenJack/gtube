import React, { useContext } from 'react';
import * as T from 'prop-types';
import { withRouter } from 'react-router-dom';
import { SearchContext } from 'context';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Header } from 'organisms';

const cn = bemHelper('theme');

export const Default = withRouter(({
  children,
  ...props
}) => {
  const { ...propsSearch } = useContext(SearchContext);
  return (
    <div {...cn('', 'light')}>
      <Header mix={cn('header').className} {...{ ...props, ...propsSearch }} />
      <div {...cn('wrap')}>
        {children}
      </div>
    </div>
  );
});

Default.propTypes = {
  children: T.node.isRequired
};
