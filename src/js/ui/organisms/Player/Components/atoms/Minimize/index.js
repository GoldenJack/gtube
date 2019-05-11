import React from 'react';
import T from 'prop-types';
import { Button, Icon } from 'atoms';

export const Minimize = ({ mix, minimize, onMinimizePlayer }) => {
  const toggleSizePlayer = () => onMinimizePlayer(!minimize);
  return (
    <Button mix={mix} onClick={toggleSizePlayer}>
      <Icon icon={minimize ? 'fullsize' : 'minimize'} size="small" />
    </Button>
  );
};

Minimize.propTypes = {
  mix: T.string,
  minimize: T.bool,
  onMinimizePlayer: T.func.isRequired
};

Minimize.defaultProps = {
  mix: '',
  minimize: false
};
