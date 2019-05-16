import React from 'react';
// common icons
import Eyes from 'img/icons/eyes.svg';
import Logo from 'img/logo.svg';
import Microphone from 'img/icons/microphone.svg';
import Power from 'img/icons/power.svg';
import Close from 'img/icons/close.svg';
import Minimize from 'img/icons/minimize.svg';
import Fullsize from 'img/icons/fullsize.svg';
import NotFound from 'img/icons/not-found.svg';

// home menu icons
import Popular from 'img/icons/menu/popular.svg';

// player icons
import Play from 'img/icons/player/play.svg';
import Pause from 'img/icons/player/pause.svg';
import Maximize from 'img/icons/player/maximize.svg';
import Volume from 'img/icons/player/volume.svg';

export const getIcon = ({ icon, size, ...props }) => {
  switch (icon) {
    case 'close':
      return (<Close className={size} {...props} />);
    case 'eyes':
      return (<Logo {...props} />);
    case 'fullsize':
      return (<Fullsize {...props} />);
    case 'logo':
      return (<Logo {...props} />);
    case 'maximize':
      return (<Maximize {...props} />);
    case 'microphone':
      return (<Microphone {...props} />);
    case 'minimize':
      return (<Minimize {...props} />);
    case 'power':
      return (<Power {...props} />);
    case 'popular':
      return (<Popular {...props} />);
    case 'pause':
      return (<Pause {...props} />);
    case 'play':
      return (<Play {...props} />);
    case 'volume':
      return (<Volume {...props} />);
    default: return (<NotFound />);
  }
};
