import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cnWrapper = bemHelper('wrapper');

export const Wrapper = ({ padding, children, ...props }) => {
  return (
    <div {...cnWrapper('')} style={{ padding }} {...props}>
      { children }
    </div>
  );
};

Wrapper.propTypes = {
  padding: T.string,
  children: T.object.isRequired
};

Wrapper.defaultProps = {
  padding: '40px'
};

const cnCommonWrapper = bemHelper('common-wrapper');

export const CommonWrapper = ({ mix, children }) => (
  <div {...cnCommonWrapper('', '', mix)}>
    { children }
  </div>
);

CommonWrapper.propTypes = {
  mix: T.string,
  children: T.object.isRequired,
};

CommonWrapper.defaultProps = {
  mix: ''
};
