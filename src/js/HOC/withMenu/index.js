import React, { useEffect, useState, Fragment } from 'react';

// TODO: Added PropTypes

const withMenu = WrappedComponent => ({
  location,
  ...wrappedComponentProps
}) => {
  const [showMenu, setShowMenu] = useState(true);
  const [oversea, setOversea] = useState(false);
  const widthWindow = window.innerWidth;

  useEffect(() => {
    if (widthWindow <= 768 || location.pathname.indexOf('channel') !== -1) {
      setShowMenu(false);
      setOversea(true);
    } else {
      setShowMenu(true);
      setOversea(false);
    }
  }, [location.pathname]);

  const toggleShow = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <WrappedComponent
        {...wrappedComponentProps}
        oversea={oversea}
        showMenu={showMenu}
        toggleShow={toggleShow}
      />
    </Fragment>
  );
};

export default withMenu;
