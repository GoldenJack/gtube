import React, { Component } from 'react';
import * as T from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import WithPreloader from 'molecules/WithPreloader';

const cn = bemHelper('channel');

class Channel extends Component {
  componentDidMount() {
    const { getChannel, channelId, fetchStatus } = this.props;
    !fetchStatus && getChannel(channelId);
  }


  render() {
    const {
      fetchStatus
    } = this.props;

    return (
      <div {...cn()} ref={this.wrapper}>
        <WithPreloader readyContent={fetchStatus}>
          <p>Ready Channel</p>
        </WithPreloader>
      </div>
    );
  }
}

Channel.propTypes = {
  channel: T.object.isRequired,
  channelId: T.string.isRequired,
  fetchStatus: T.bool.isRequired,
  getChannel: T.func.isRequired
};

export default Channel;
