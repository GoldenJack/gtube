import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cnWrapper = bemHelper('wrapper');

export const Wrapper = ({ mix, style, type, children, ...props }) => {
  return (
    <div {...cnWrapper('', type, mix)} style={style} {...props}>
      { children }
    </div>
  );
};

Wrapper.propTypes = {
  children: T.node.isRequired,
  style: T.object,
  type: T.string
};

Wrapper.defaultProps = {
  style: {},
  type: 'default'
};
