import React from 'react';
import T from 'prop-types';
import { Button, Icon } from 'atoms';

export const Maximize = ({ mix, onFullScreen }) => {
  return (
    <Button mix={mix} onClick={onFullScreen}>
      <Icon icon="maximize" size="medium" />
    </Button>
  );
};

Maximize.propTypes = {
  mix: T.string,
  onFullScreen: T.func.isRequired
};

Maximize.defaultProps = {
  mix: '',
};
