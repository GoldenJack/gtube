import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('wrapper');

const propTypes = {
  padding: T.string,
  children: T.object.isRequired
};

const defaultProps = {
  padding: '40px'
};

const Wrapper = ({
  padding,
  children
}) => {
  const style = {
    padding
  };

  return (
    <div {...cn('')} style={style}>
      { children }
    </div>
  );
};

Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;

export default Wrapper;
