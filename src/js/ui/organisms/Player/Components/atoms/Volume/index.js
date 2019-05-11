import React, { useState } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon } from 'atoms';

const cn = bemHelper('volume');

export const Volume = ({ volume, onSetVolume }) => {
  const [volumeState, setVolumeState] = useState(volume);

  const onChangeVolume = e => {
    setVolumeState(e.target.value);
    onSetVolume(e.target.value);
  };

  return (
    <div {...cn()}>
      <input {...cn('input')} type="range" value={volumeState} onChange={onChangeVolume} />
      <Icon mix={cn('icon').className} icon="volume" size="medium" />
    </div>
  );
};

Volume.propTypes = {
  volume: T.number.isRequired,
  onSetVolume: T.func.isRequired
};
