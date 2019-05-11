import React from 'react';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Icon } from 'atoms';
import { Minimize } from 'organisms/Player/Components/atoms/Minimize';

const cn = bemHelper('panel');

export const Panel = ({
  minimize,
  onClose,
  onMinimizePlayer
}) => {
  return (
    <div {...cn()}>
      <Minimize
        mix={cn('minimize').className}
        minimize={minimize}
        onMinimizePlayer={onMinimizePlayer}
      />
      <Icon mix={cn('close').className} icon="close" onClick={onClose} size="small" />
    </div>
  );
};

Panel.propTypes = {
  minimize: T.bool.isRequired,
  onClose: T.func.isRequired,
  onMinimizePlayer: T.func.isRequired
};
