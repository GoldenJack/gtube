import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('title');

export const Title = ({ type, mix, children }) => {
  return (
    React.createElement(
      type,
      { ...cn('title', '', mix) },
      children
    )
  );
};

Title.propTypes = {
  mix: T.string,
  type: T.string.isRequired,
  children: T.string.isRequired,
};

Title.defaultProps = {
  mix: ''
};
