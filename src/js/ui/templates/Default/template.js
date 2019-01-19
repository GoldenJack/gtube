import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import withMenu from 'HOC/withMenu';
import './style.scss';

import Header from 'organisms/Header';
import Sidebar from 'organisms/Sidebar';
// import ErrorBoundary from 'organisms/ErrorBoundary';

const cn = bemHelper('default-template');

class Default extends Component {
  state = {
    animation: ''
  }

  // componentDidUpdate() {
  //   this.setState({
  //     animation: 'true'
  //   });
  // }

  render() {
    const {
      children,
      showMenu,
      isMobile,
      toggleShow,
      searchQuery,
      getSearchList,
      ...props
    } = this.props;
    const { animation } = this.state;
    const toggleClass = showMenu && !isMobile ? 'with-menu' : 'full-width';
    const toggleClassOverlay = showMenu ? 'open' : 'close';
    return (
      <div {...cn()}>
        <Header
          mix={cn('header').className}
          toggleShow={toggleShow}
          searchQuery={searchQuery}
          getSearchList={getSearchList}
          {...props}
        />
        <div {...cn('wrap')}>
          {isMobile && (
            <div
              {...cn('overlay', toggleClassOverlay)}
              role="none"
              onClick={toggleShow}
            />
          )}
          <Sidebar showMenu={showMenu} isMobile={isMobile} {...props} />
          <div {...cn('content', `${!isMobile && toggleClass}`, animation)}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Default.propTypes = {
  children: T.array.isRequired,
  showMenu: T.bool.isRequired,
  isMobile: T.bool.isRequired,
  toggleShow: T.func.isRequired,
  searchQuery: T.string.isRequired,
  getSearchList: T.func.isRequired
};

export default withMenu(Default);
