import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Header from 'organisms/Header';
import Sidebar from 'organisms/Sidebar';

const cn = bemHelper('default-template');

const Default = ({ children }) => (
  <div {...cn()}>
    <Header mix={cn('header').className} />
    <div {...cn('wrap')}>
      <Sidebar />
      <div {...cn('content')}>
        {children}
      </div>
    </div>
  </div>
);

Default.propTypes = {
  children: T.object.isRequired
};

export default Default;
