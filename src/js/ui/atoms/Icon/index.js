import React from 'react';
import * as T from 'prop-types';
import SVGInline from "react-svg-inline"
import bemHelper from 'utils/bem-helper';

const cn = bemHelper('icon');

// export const Icon = ({ icon, mix, ...props }) => (
//   <img
//     {...cn('', '', mix)}
//     src={icon}
//     alt="icon"
//     role="none"
//     {...props}
//   />
// );

export const Icon = ({ icon, mix, active, ...props }) => {
  return (
    <SVGInline {...cn('', '', (active ? mix : `${mix}--active`))} svg={icon} {...props} />
  );
};

Icon.propTypes = {
  active: T.bool,
  icon: T.string.isRequired,
  mix: T.string
};

Icon.defaultProps = {
  active: false,
  mix: ''
};
