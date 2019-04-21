import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('preloader');

export const Preloader = ({ mix }) => (
  <div {...cn()}>
    <div {...cn('spinner', '', mix)}>
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28" />
      </svg>
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28" />
      </svg>
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28" />
      </svg>
      <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28" />
      </svg>
    </div>
  </div>
);

Preloader.propTypes = {
  mix: T.string,
};

Preloader.defaultProps = {
  mix: ''
};
