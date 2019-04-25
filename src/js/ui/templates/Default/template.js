import React, { useState } from 'react';
import * as T from 'prop-types';
import { useMenu } from 'hooks';
import { routes } from 'constants/routes';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { CommonWrapper } from 'atoms';
import Header from 'organisms/Header';
import { Menu } from 'organisms/Menu';

const cn = bemHelper('theme');

const propTypes = {
  children: T.array.isRequired
};

const Default = ({
  children,
  floating,
  ...props
}) => {
  const [theme, setTheme] = useState('ligth');
  const { visibleMenu, toggleVisibleMenu, setVisibleMenu } = useMenu();

  const toggleTheme = () => {
    setTheme(theme === 'ligth' ? 'dark' : 'ligth');
  };

  return (
    <div {...cn('', theme)}>
      <Header
        mix={cn('header').className}
        toggleShow={toggleVisibleMenu}
        visibleMenu={visibleMenu}
        {...props}
      />
      <div {...cn('wrap')}>
        <CommonWrapper mix={cn('content').className}>
          {children}
        </CommonWrapper>
        <Menu visible={visibleMenu} routes={routes} setVisibleMenu={setVisibleMenu} />
      </div>
    </div>
  );
};

Default.propTypes = propTypes;

export default Default;
