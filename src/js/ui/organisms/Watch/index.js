import React from 'react';
import ReactDOM from 'react-dom';
import T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { Player } from 'organisms';

const cn = bemHelper('watch');
const root = document.getElementById('watch');

export const Watch = ({
  activePlayer,
  closePlayer,
  minimize,
  ...props
}) => {
  const markup = (
    <div {...cn('', { minimize })}>
      <div {...cn('overlay', { 'open': activePlayer })} role="none" onClick={closePlayer} />
      <Player
        mix={cn('player').className}
        closePlayer={closePlayer}
        activePlayer={activePlayer}
        minimize={minimize}
        {...props}
      />
    </div>
  );

  return ReactDOM.createPortal(
    markup,
    root
  );
};

Watch.propTypes = {
  activePlayer: T.bool.isRequired,
  closePlayer: T.func.isRequired,
  minimize: T.bool.isRequired
};
