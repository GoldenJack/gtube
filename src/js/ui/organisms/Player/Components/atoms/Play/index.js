import React from 'react';
import T from 'prop-types';
import { Button, Icon } from 'atoms';

export const Play = ({ mix, playing, togglePlayPause }) => {
  return (
    <Button mix={mix} onClick={togglePlayPause}>
      <Icon icon={playing ? 'pause' : 'play'} size="medium" />
    </Button>
  );
};

Play.propTypes = {
  mix: T.string,
  playing: T.bool,
  togglePlayPause: T.func.isRequired
};

Play.defaultProps = {
  mix: '',
  playing: false
};
