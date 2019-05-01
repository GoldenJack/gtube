import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Play } from 'organisms/Player/Components/atoms/Play';
import { Progress } from 'organisms/Player/Components/atoms/Progress';

const cn = bemHelper('controls');

export const Controls = ({
  mix,
  playing,
  onPlayPlayer,
  onPausePlayer,
  progress
}) => {
  const togglePlayPause = () => playing ? onPausePlayer() : onPlayPlayer();

  return (
    <div {...cn()}>
      <Play mix={cn('play').className} togglePlayPause={togglePlayPause} playing={playing} />
      <Progress
        mix={cn('progress').className}
        onChooseTime={(e) => {console.log(e)}}
        progress={progress}
        type="full"
      />
    </div>
  );
};

Controls.propTypes = {
  mix: T.string,
  playing: T.bool.isRequired,
  onPlayPlayer: T.func.isRequired,
  onPausePlayer: T.func.isRequired,
  progress: T.number.isRequired
};

Controls.defaultProps = {
  mix: '',
};
