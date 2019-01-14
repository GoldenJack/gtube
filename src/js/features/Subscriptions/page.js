import React, { Component } from 'react';
import * as T from 'prop-types';

import WithPreloader from 'molecules/WithPreloader';

class Subscriptions extends Component {
  componentDidMount() {
    const {
      accessToken,
      getSubscriptions,
      readySub,
      userInfo: {
        channelId = false
      },
      readyAuth
    } = this.props;
    !readySub && readyAuth && getSubscriptions(accessToken, channelId);
  }

  componentDidUpdate(prevProps) {
    const {
      accessToken,
      getSubscriptions,
      readySub,
      userInfo: {
        channelId = false
      },
      readyAuth
    } = this.props;
    if (prevProps.accessToken === null) {
      !readySub && readyAuth && getSubscriptions(accessToken, channelId);
    }
  }

  _renderSubs = () => {
    const { readySub } = this.props;
    if (readySub) {
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
  readySub: T.bool.isRequired,
  userInfo: T.object.isRequired,
  readyAuth: T.bool.isRequired
};

Subscriptions.defaultProps = {
  subscriptions: {}
};

export default Subscriptions;
