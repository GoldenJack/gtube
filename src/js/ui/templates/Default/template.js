import React from 'react';
import * as T from 'prop-types';
import { useSidebar } from 'hooks';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { CommonWrapper } from 'atoms/Wrapper';
import Header from 'organisms/Header';
import Sidebar from 'organisms/Sidebar';

const cn = bemHelper('default-template');

const propTypes = {
  children: T.array.isRequired,
  floating: T.bool.isRequired,
};

const Default = ({
  children,
  floating,
  ...props
}) => {
  const { visibleSidebar, toggleVisibleSidebar, setVisibleSidebar } = useSidebar(floating);
  return (
    <div {...cn()}>
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
