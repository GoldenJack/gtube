import { useState } from 'react';

export const usePlayer = () => {
  const [activePlayer, setActivePlayer] = useState(false);

  const openPlayer = () => setActivePlayer(true);
  const closePlayer = () => setActivePlayer(false);

  return { activePlayer, openPlayer, closePlayer };
};
