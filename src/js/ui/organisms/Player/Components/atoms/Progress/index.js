import React, { useEffect, useCallback, useState } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('progress');

export const Progress = ({
  mix,
  type,
  duration,
  playing,
  onGetProgress,
  onSetProgress
}) => {
  const [progressWidth, setProgressWidth] = useState(0);

  const getProgress = useCallback(cb => {
    const timeNow = cb();
    const percent = duration / 100;
    return timeNow / percent;
  }, [duration]);

  const onChooseTime = e => {
    const eWidth = e.target.parentNode.getBoundingClientRect().width / 100;
    const eClick = e.pageX - e.target.getBoundingClientRect().left;

    const clickByWidth = (eClick / eWidth) * (duration / 100);
    onSetProgress(clickByWidth);
  };

  useEffect(() => {
    if (playing) {
      window.progressPlayer = setInterval(() => {
        const progressPlayer = getProgress(onGetProgress);
        setProgressWidth(progressPlayer);
      }, 100);
    }

    if (!playing) clearInterval(window.progressPlayer);
  }, [playing, getProgress, onGetProgress]);

  return (
    <div {...cn('', type, mix)}>
      <div {...cn('bar')} onClick={onChooseTime} role="none">
        <div {...cn('line')} style={{ width: `${progressWidth}%` }} />
      </div>
    </div>
  );
};

Progress.propTypes = {
  type: T.string.isRequired,
  playing: T.bool.isRequired,
  duration: T.number.isRequired,
  onGetProgress: T.func.isRequired,
  onSetProgress: T.func.isRequired,
};
