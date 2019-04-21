import { useState } from 'react';

export const useMenu = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const toggleVisibleMenu = () => setVisibleMenu(!visibleMenu);

  return {
    visibleMenu,
    toggleVisibleMenu,
    setVisibleMenu
  };
};
