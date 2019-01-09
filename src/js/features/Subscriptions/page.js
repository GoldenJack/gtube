import React, { Component } from 'react';
import * as T from 'prop-types';

import WithPreloader from 'molecules/WithPreloader';

class Subscriptions extends Component {
  componentDidMount() {
    const {
      accessToken,
      getSubscriptions,
      readySub,
      userInfo,
      readyAuth
    } = this.props;
    !readySub && readyAuth && getSubscriptions(accessToken);
  }

  componentDidUpdate(prevProps) {
    const {
      accessToken,
      getSubscriptions,
      readySub,
      userInfo: {
        channelId
      },
      readyAuth
    } = this.props;
    if (prevProps.accessToken === null) {
      !readySub && readyAuth && getSubscriptions(accessToken, channelId);
    }
  }

  _renderSubs = () => {
    const { subscriptions } = this.props;
    if (subscriptions) {
      const { subscriptions: { items } } = this.props;
      return items.map(({
        snippet: {
          title
        }
      }) => (
        <div>
          <h4>{ title }</h4>
        </div>
      ));
    }
    return (
      <p>Nope</p>
    );
  }

  render() {
    const { readySub } = this.props;
    return (
      <div>
        <WithPreloader readyContent={readySub}>
          {this._renderSubs()}
        </WithPreloader>
      </div>
    );
  }
}

Subscriptions.propTypes = {
  subscriptions: T.object,
  accessToken: T.string.isRequired,
  getSubscriptions: T.func.isRequired,
  readySub: T.bool.isRequired
};

Subscriptions.defaultProps = {
  subscriptions: false
};

export default Subscriptions;
