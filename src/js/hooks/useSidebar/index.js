import { useEffect, useState } from 'react';

export const useSidebar = (floating) => {
  const [visibleSidebar, setVisibleSidebar] = useState(true);

  const toggleVisibleSidebar = () => setVisibleSidebar(!visibleSidebar);

  useEffect(() => {
    floating ? setVisibleSidebar(false) : setVisibleSidebar(true);
  }, [floating]);

  return {
    visibleSidebar,
    toggleVisibleSidebar,
    setVisibleSidebar
  };
};
