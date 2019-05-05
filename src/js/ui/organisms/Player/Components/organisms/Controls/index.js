import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Play } from 'organisms/Player/Components/atoms/Play';
import { Progress } from 'organisms/Player/Components/atoms/Progress';
import { Maximize } from 'organisms/Player/Components/atoms/Maximize';

const cn = bemHelper('controls');

export const Controls = ({
  playing,
  onPlayPlayer,
  onPausePlayer,
  duration,
  onFullScreen,
  onSetProgress,
  onGetProgress
}) => {
  const togglePlayPause = () => playing ? onPausePlayer() : onPlayPlayer();

  return (
    <div {...cn()}>
      <Play mix={cn('play').className} togglePlayPause={togglePlayPause} playing={playing} />
      <Progress
        mix={cn('progress').className}
        playing={playing}
        onSetProgress={onSetProgress}
        onGetProgress={onGetProgress}
        duration={duration}
        type="full"
      />
      <Maximize mix={cn('maximize').className} onFullScreen={onFullScreen} />
    </div>
  );
};

Controls.propTypes = {
  playing: T.bool.isRequired,
  onPlayPlayer: T.func.isRequired,
  onPausePlayer: T.func.isRequired,
  duration: T.number.isRequired,
  onFullScreen: T.func.isRequired,
  onSetProgress: T.func.isRequired,
  onGetProgress: T.func.isRequired
};
