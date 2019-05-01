import React from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('progress');

export const Progress = ({
  mix,
  type,
  progress,
  onChooseTime
}) => {
  const progressWidth = {
    width: `${progress}%`
  };

  return (
    <div {...cn('', type, mix)}>
      <div {...cn('bar')} onClick={onChooseTime} role="none">
        <div {...cn('line')} style={progressWidth} />
      </div>
    </div>
  );
};

Progress.propTypes = {
  type: T.string.isRequired,
  progress: T.number.isRequired,
  onChooseTime: T.func.isRequired
};
