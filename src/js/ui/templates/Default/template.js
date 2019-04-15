import React, { useState } from 'react';
import * as T from 'prop-types';
import { useSidebar } from 'hooks';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { CommonWrapper } from 'atoms/Wrapper';
import Header from 'organisms/Header';
import Sidebar from 'organisms/Sidebar';

const cn = bemHelper('theme');

const propTypes = {
  children: T.array.isRequired,
  floating: T.bool.isRequired,
};

const Default = ({
  children,
  floating,
  ...props
}) => {
  const [theme, setTheme] = useState('ligth');
  const { visibleSidebar, toggleVisibleSidebar, setVisibleSidebar } = useSidebar(floating);

  const toggleTheme = () => {
    setTheme(theme === 'ligth' ? 'dark' : 'ligth');
  };

  return (
    <div {...cn('', theme)}>
      <Header
        mix={cn('header').className}
        toggleShow={toggleVisibleSidebar}
        {...props}
      />
      <div {...cn('wrap')}>
        <Sidebar
          visible={visibleSidebar}
          floating={floating}
          onClose={() => setVisibleSidebar(false)}
          toggleTheme={toggleTheme}
          {...props}
        />
        <CommonWrapper
          mix={cn('content').className}
          visibleSidebar={visibleSidebar}
          floating={floating}
        >
          {children}
        </CommonWrapper>
      </div>
    </div>
  );
};

Default.propTypes = propTypes;

export default Default;
