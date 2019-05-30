import React, { Fragment } from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('sidebar');

export const Sidebar = ({
  visible,
  onClose,
  children
}) => {
  const toggleClass = visible ? 'visible' : 'hidden';

  return (
    <Fragment>
      <div
        {...cn('overlay', visible ? 'open' : 'close')}
        role="none"
        onClick={onClose}
      />
      <div {...cn('', toggleClass)}>
        {children}
      </div>
    </Fragment>
  );
};

Sidebar.propTypes = {
  visible: T.bool,
  onClose: T.func.isRequired,
  children: T.node.isRequired
};

Sidebar.defaultProps = {
  visible: false
};
